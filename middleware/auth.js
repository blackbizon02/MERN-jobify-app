import { UnAuthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
  // const authHeader = req.headers.authorization;

  // if (!authHeader || !authHeader.startsWith("Bearer")) {
  //   throw new UnAuthenticatedError("Authentication Invalid!");
  // }

  // const token = authHeader.split(" ")[1];

  const token = req.cookies.token;
  if (!token) {
    throw new UnAuthenticatedError("Authentication Invalid!");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userId === `${process.env.TEST_USER_ID}`;

    req.user = { userId: payload.userId, testUser };
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid!");
  }

  next();
};

export default auth;
