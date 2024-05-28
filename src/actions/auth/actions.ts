import ErrorHandler from "@/_utils/ErrorHandler";
import dbConnect from "@/lib/db";
import { Hash } from "@/lib/hash";
import User from "@/models/User";
import type { SignupI } from "@/types/signup";

export const signup = async (values: SignupI) => {
  const { email, password, fullName } = values;
  await dbConnect();

  var user = await User.findOne({ email: email });

  if (user) {
    throw new ErrorHandler("User already exists", 400);
  }

  user = new User({ name: fullName, email, password });
  // Generating Hash
  const hash = await Hash(password);
  user.password = hash;
  await user.save();
};
