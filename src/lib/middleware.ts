import jwt from "jsonwebtoken";
import { NextApiResponse, NextApiRequest } from "next";

interface CustomNextApiRequest extends NextApiRequest {
  user: any;
}

export default function authMiddleware(
  req: CustomNextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ message: "Not authenticated" });
  }

  try {
    const payload = jwt.verify(token, process.env.NEXTAUTH_SECRET as string);
    req.user = payload;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
}
