export class CustomError extends Error {
  statusCode: number;
  code: string;
  constructor(message: string, statusCode = 500, code: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const BadRequest = (msg = "Bad request", code: string) =>
  new CustomError(msg, 400, code);

export const Unauthorized = (msg = "Unauthorized", code: string) =>
  new CustomError(msg, 401, code);

export const Forbidden = (msg = "Forbidden", code: string) =>
  new CustomError(msg, 403, code);

export const NotFound = (msg = "Not found", code: string) =>
  new CustomError(msg, 404, code);

export const Conflict = (msg = "Conflict", code: string) =>
  new CustomError(msg, 409, code);
