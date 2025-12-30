import { Request, Response, NextFunction } from "express";
import { CustomError } from "../Utils/customError";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      success: false,
      error: { message: err.message, code: err.code },
    });
  }

  console.error(err);
  return res.status(500).json({
    success: false,
    error: { message: "Internal server error" },
  });
};
