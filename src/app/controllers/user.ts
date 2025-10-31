import bcrypt from "bcryptjs";
import UserValidationSchema from "../models/users/userValidation.js";
import type { UserType } from "../models/users/userValidation.js";
import User from "../models/users/userSchema.js";
import { service } from "../services/userService.js";
import redis from "../config/redis.js";
import jwt from "jsonwebtoken"

const registerUser = async (req: any, res: any) => {
  try {
    // Extract body
    const { role, password, ...rest } = req.body;

  
    let filteredData: Partial<UserType> = {
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
    } else if (role === "seller") {
      if (!rest.sellerDetails) {
        return res
          .status(400)
          .json({ success: false, message: "Seller details are required" });
      }
      filteredData.sellerDetails = rest.sellerDetails;
    } else if (role === "admin") {
      if (rest.secretKey !== process.env.ADMIN_SECRET_KEY) {
        return res
          .status(403)
          .json({ success: false, message: "Invalid Admin Secret Key" });
      }
    }

    // Validate using Zod
    const validatedUser: UserType = UserValidationSchema.parse(filteredData);

    //  Check for existing email
    const existingUser = await User.findOne({ email: validatedUser.email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please log in instead.",
      });
    }


    //  Save user
    const newUser = await service.userToDb({
      ...validatedUser
    
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { id: newUser.id, role: newUser.role, email: newUser.email },
    });
  } catch (err: any) {
    console.error("Error:", err);
    res.status(500).json({
      success: false,
      message: err?.message || "Server Error",
    });
  }
};






const loginUserByEmail= async(req: any, res: any)=>{

  const {email , password}= req.body;
   if(!email || !password) {
    return res.json({
      success:false,
      message : "all the fields are required"
    })
   }

   // Check if user exists
   const user = await User.findOne({ email });
   if (!user) {
     return res.json({
       success: false,
       message: "User not found"
     });
   }

   // Check password
   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) {
     return res.json({
       success: false,
       message: "Invalid credentials"
     });
   }
 const role = user.role;
      const accesstoken = jwt.sign({ email , role }, process.env.JWT_SECRET!, { expiresIn: '15m' });
    const refreshtoken = jwt.sign({ email , role  }, process.env.JWT_REFRESH_SECRET!, { expiresIn: '2d' });

    await redis.sAdd(`refreshTokens:${email}`, refreshtoken);
    await redis.expire(`refreshTokens:${email}`, 2 * 24 * 60 * 60);

    res
      .cookie("accesstoken", accesstoken, { httpOnly: true, secure: true ,sameSite: "lax"})
      .cookie("refreshtoken", refreshtoken, { httpOnly: true, secure: true,sameSite: "lax" })
      .json({ success: true, accesstoken, refreshtoken , role});

   return res.json({
     success: true,
     message: "Login successful",
    
   });
}





const loginUserByNumber= async(req: any, res: any)=>{

  const {number , password  }= req.body;
   if(!number || !password) {
    return res.json({
      success:false,
      message : "all the fields are required"
    })
   }

   // Check if user exists
   const user = await User.findOne({ number });
   if (!user) {
     return res.json({
       success: false,
       message: "User not found"
     });
   }

   // Check password
   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) {
     return res.json({
       success: false,
       message: "Invalid credentials"
     });
   }


     
   return res.json({
     success: true,
     message: "Login successful",
     
   });
}


export const userController = {
  registerUser,
  loginUserByEmail,
  loginUserByNumber

};



