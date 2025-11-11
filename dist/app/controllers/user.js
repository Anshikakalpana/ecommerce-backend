import bcrypt from "bcryptjs";
import crypto from "crypto";
import UserValidationSchema from "../models/users/userValidation.js";
import User from "../models/users/userSchema.js";
import { service } from "../services/userService.js";
import redis from "../config/redis.js";
import jwt from "jsonwebtoken";
const registerUser = async (req, res) => {
    try {
        const { role, password, ...rest } = req.body;
        let filteredData = {
            id: crypto.randomUUID(),
            name: rest.name,
            email: rest.email,
            password,
            phoneNo: rest.phoneNo,
            address: rest.address,
            role,
        };
        if (role === "buyer") {
            filteredData.subscription = rest.subscription || { isActive: false };
        }
        else if (role === "seller") {
            if (!rest.sellerDetails) {
                return res
                    .status(400)
                    .json({ success: false, message: "Seller details are required" });
            }
            filteredData.sellerDetails = rest.sellerDetails;
        }
        else if (role === "admin") {
            if (rest.secretKey !== process.env.ADMIN_SECRET_KEY) {
                return res
                    .status(403)
                    .json({ success: false, message: "Invalid Admin Secret Key" });
            }
        }
        // validation
        const validatedUser = UserValidationSchema.parse(filteredData);
        //  existing email
        const existingUser = await User.findOne({ email: validatedUser.email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please log in instead.",
            });
        }
        const hashed = await bcrypt.hash(validatedUser.password, 10);
        validatedUser.password = hashed;
        //  Save user
        const newUser = await service.userToDb({
            ...validatedUser,
        });
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: { id: newUser.id, role: newUser.role, email: newUser.email },
        });
    }
    catch (err) {
        console.error("Error:", err);
        res.status(500).json({
            success: false,
            message: err?.message || "Server Error",
        });
    }
};
const loginUserByEmail = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "all the fields are required",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const ip = req.socket?.remoteAddress || req.ip;
        console.log(ip.slice(0, 8));
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }
        const role = user.role;
        const accesstoken = jwt.sign({ id: user._id, email, role }, process.env.JWT_SECRET, { expiresIn: "15m" });
        const refreshtoken = jwt.sign({ id: user._id, email, role }, process.env.JWT_REFRESH_SECRET, { expiresIn: "2d" });
        await redis.sAdd(`refreshTokens:${email}`, refreshtoken);
        await redis.expire(`refreshTokens:${email}`, 2 * 24 * 60 * 60);
        // set cookies and return once
        return res
            .cookie("accesstoken", accesstoken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        })
            .cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        })
            .json({
            success: true,
            message: "Login successful",
            accesstoken,
            refreshtoken,
            role,
        });
    }
    catch (err) {
        console.error("LoginByEmail Error:", err);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};
const loginUserByNumber = async (req, res) => {
    try {
        const { number, password } = req.body;
        if (!number || !password) {
            return res.status(400).json({
                success: false,
                message: "all the fields are required",
            });
        }
        const user = await User.findOne({ phoneNo: number });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }
        const role = user.role;
        const accesstoken = jwt.sign({ id: user._id, number, role }, process.env.JWT_SECRET, {
            expiresIn: "15m",
        });
        const refreshtoken = jwt.sign({ number, role }, process.env.JWT_REFRESH_SECRET, { expiresIn: "2d" });
        await redis.sAdd(`refreshTokens:${number}`, refreshtoken);
        await redis.expire(`refreshTokens:${number}`, 2 * 24 * 60 * 60);
        return res
            .cookie("accesstoken", accesstoken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
        })
            .cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
        })
            .json({
            success: true,
            message: "Login successful",
            accesstoken,
            refreshtoken,
            role,
        });
    }
    catch (err) {
        console.error("LoginByNumber Error:", err);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};
const refreshToken = async (req, res) => {
    try {
        const { refreshtoken } = req.cookies;
        if (!refreshtoken) {
            return res.status(401).json({ success: false, message: "Missing refresh token" });
        }
        const decoded = jwt.verify(refreshtoken, process.env.JWT_REFRESH_SECRET);
        const field = decoded.email || decoded.number;
        const key = decoded.email ? `refreshTokens:${decoded.email}` : `refreshTokens:${decoded.number}`;
        const userId = decoded.id;
        const isMember = await redis.sIsMember(key, refreshtoken);
        if (!isMember) {
            res.clearCookie("accesstoken");
            res.clearCookie("refreshtoken");
            return res.status(403).json({ success: false, message: "Invalid session" });
        }
        const newAccessToken = jwt.sign({ id: userId, email: decoded.email, number: decoded.number, role: decoded.role }, process.env.JWT_SECRET, { expiresIn: "15m" });
        const newRefreshToken = jwt.sign({ id: userId, email: decoded.email, number: decoded.number, role: decoded.role }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
        await redis.sRem(key, refreshtoken);
        await redis.sAdd(key, newRefreshToken);
        await redis.expire(key, 7 * 24 * 60 * 60);
        res.cookie("accesstoken", newAccessToken, { httpOnly: true, secure: true, sameSite: "lax" });
        res.cookie("refreshtoken", newRefreshToken, { httpOnly: true, secure: true, sameSite: "lax" });
        return res.json({ success: true, accesstoken: newAccessToken });
    }
    catch (err) {
        console.error("RefreshToken Error:", err);
        res.clearCookie("accesstoken");
        res.clearCookie("refreshtoken");
        return res.status(403).json({ success: false, message: "Invalid or expired refresh token" });
    }
};
const logout = async (req, res) => {
    try {
        const { refreshtoken } = req.cookies;
        if (!refreshtoken)
            return res.status(400).json({ success: false, message: "No token" });
        const decoded = jwt.verify(refreshtoken, process.env.JWT_REFRESH_SECRET);
        if (typeof decoded === "string") {
            return res
                .status(400)
                .json({ success: false, message: "Invalid token format" });
        }
        const key = decoded.email
            ? `refreshTokens:${decoded.email}`
            : decoded.number
                ? `refreshTokens:${decoded.number}`
                : null;
        if (!key)
            return res
                .status(400)
                .json({ success: false, message: "Invalid token payload" });
        await redis.sRem(key, refreshtoken);
        res.clearCookie("accesstoken");
        res.clearCookie("refreshtoken");
        return res.json({ success: true, message: "Logged out from this device" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Logout failed" });
    }
};
const allDeviceLogout = async (req, res) => {
    try {
        const { refreshtoken } = req.cookies;
        if (!refreshtoken) {
            return res.json({ success: false, message: "Invalid session" });
        }
        const decoded = jwt.verify(refreshtoken, process.env.JWT_REFRESH_SECRET);
        if (typeof decoded === "string") {
            return res.json({
                success: false,
                message: "invalid format",
            });
        }
        const email = decoded.email ?? decoded.number;
        if (!email) {
            return res.status(400).json({ success: false, message: "Invalid token" });
        }
        res.clearCookie("accesstoken");
        res.clearCookie("refreshtoken");
        await redis.del(`refreshTokens:${email}`);
        return res.json({
            success: true,
            message: "logged out from all devices",
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Logout failed" });
    }
};
export const userController = {
    registerUser,
    loginUserByEmail,
    loginUserByNumber,
    logout,
    allDeviceLogout,
};
//# sourceMappingURL=user.js.map