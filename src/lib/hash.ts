import bcrypt from "bcryptjs";

export const Hash = async (plaintext: string): Promise<string> => {
  const hashedValue = await bcrypt.hash(plaintext, 5);
  return hashedValue;
};

export const compareHash = async (
  plaintext: string, // text coming freom user input
  hash: string // coming from db
): Promise<boolean> => {
  const hashedValue = await bcrypt.compare(plaintext, hash);
  return hashedValue;
};
