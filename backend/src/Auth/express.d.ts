import { jwtPayloadType } from "./jwtPayload.type";

declare global {
  namespace Express {
    interface Request {
      user?: jwtPayloadType;
    }
  }
}
