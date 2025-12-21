import { NextFunction, Request, Response } from "express";
import z from "zod";

export const validateBody = (schema: z.ZodType<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        errors: z.treeifyError(result.error),
      });
    }
    req.body = result.data;
    next();
  };
};
