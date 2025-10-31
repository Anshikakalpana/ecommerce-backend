import User from "../models/users/userSchema.js";
import bcrypt from "bcryptjs";
export const userToDb = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = { ...userData, password: hashedPassword };
    const result = await User.create(newUser);
    const { password, ...safeUser } = result.toObject();
    return safeUser;
};
export const updateUser = async (userId, updatedUser) => {
    const result = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
    return result;
};
export const deleteUser = async (userId) => {
    const result = await User.findByIdAndDelete(userId);
    return result;
};
export const service = {
    userToDb,
    updateUser,
    deleteUser,
};
//# sourceMappingURL=userService.js.map