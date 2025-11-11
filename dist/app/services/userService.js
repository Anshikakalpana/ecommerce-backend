import User from "../models/users/userSchema.js";
export const userToDb = async (userData) => {
    const newUser = { ...userData };
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