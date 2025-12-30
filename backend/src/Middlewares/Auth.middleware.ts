import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { CustomError } from "../../utils/customError";
import { jwtPayloadType } from "../Auth/jwtPayload.type";
import { AuthService } from "../Auth/AuthService";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new CustomError("No token provided", 401, "NO_TOKEN");
    }
    const token = authHeader.split(" ")[1];
    const authService = new AuthService();
    if (!token) {
      throw new CustomError("No token provided", 401, "NO_TOKEN");
    }
    const decoded = await authService.verifyToken(token);
    req.user = decoded;
    next();
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      return next(new CustomError("Token expired", 401, "TOKEN_EXPIRED"));
    }
    if (err.name === "JsonWebTokenError") {
      return next(new CustomError("Invalid token", 401, "INVALID_TOKEN"));
    }
    next(err);
  }
};
