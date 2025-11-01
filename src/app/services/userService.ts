import type { UserType } from "../models/users/userValidation.js";
import User from "../models/users/userSchema.js";
import bcrypt from "bcryptjs";

export const userToDb = async (userData: UserType) => {
 
  const newUser = { ...userData };
  const result = await User.create(newUser);

 
  const { password, ...safeUser } = result.toObject();
  return safeUser;
};

export const updateUser = async (userId: string, updatedUser: Partial<UserType>) => {
  const result = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
  return result;
};

export const deleteUser = async (userId: string) => {
  const result = await User.findByIdAndDelete(userId);
  return result;
};

export const service = {
  userToDb,
  updateUser,
  deleteUser,
};
