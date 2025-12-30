import { Request } from "express";
import { z } from "zod";

export type InferBody<T extends z.ZodTypeAny> = Request<{}, {}, z.infer<T>>;
