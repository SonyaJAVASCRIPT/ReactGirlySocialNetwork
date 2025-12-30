import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtPayloadType } from "./jwtPayload.type";

export class AuthService {
  constructor() {}

  async signToken(
    data: { userId: string; username: string },
    signOptions: SignOptions,
  ) {
    const payload: jwtPayloadType = {
      ...data,
    };
    return {
      access_token: jwt.sign(
        payload,
        process.env.JWT_ACCESS_SECRET!,
        signOptions,
      ),
    };
  }
  async verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as jwtPayloadType;
  }
}
