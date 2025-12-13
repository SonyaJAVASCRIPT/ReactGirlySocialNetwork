import Elysia from "elysia";

export class ValidateError extends Error {
  constructor(
    public status: number,
    public message: string,
  ) {
    super(message);
  }
  toResponse() {
    return Response.json(
      {
        code: this.status,
        error: "mlem",
      },
      {
        status: this.status,
      },
    );
  }
}
export class ImATeapotException extends ValidateError {
  constructor() {
    super(418, "I'm a teapot");
  }
}
export class IsExistException extends ValidateError {
  constructor() {
    super(409, "Already exists");
  }
}
export class UnathorizedException extends ValidateError {
  constructor() {
    super(409, "Already exists");
  }
}
export class NotFoundException extends ValidateError {
  constructor() {
    super(404, "Not found");
  }
}
