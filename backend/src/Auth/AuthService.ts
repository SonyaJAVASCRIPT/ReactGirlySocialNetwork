import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtPayloadType } from "./types/jwtPayload.type";
import { CreateUserDTOType } from "./dto/createUser.dto";
import * as bcrypt from "bcrypt";
import { UserRepository } from "../Users/UserRepository";
import { Conflict, Unauthorized } from "../Utils/customError";
import { TokenService } from "./TokenService";

export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private tokenService: TokenService,
  ) {}

  async signUp(user: CreateUserDTOType) {
    const hashedPassword = await bcrypt.hash(user.password, 11);
    try {
      const createdUser = await this.userRepository.createUser({
        ...user,
        password: hashedPassword,
      });
      return await this.tokenService.signToken(
        { userId: createdUser.id, username: createdUser.username },
        {
          expiresIn: "15m",
        },
      );
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async signIn(user: CreateUserDTOType) {
    const findUser = await this.userRepository.findUser(user.username);
    if (!findUser) {
      throw Conflict(
        "This user didn't exist (check this minecraft arg)",
        "IS_EXIST",
      );
    }
    const isMatch = await bcrypt.compare(user.password, findUser.password);
    if (!isMatch) {
      throw Unauthorized("Email or password is incorrect!", "INCORRECT_DATA");
    }
    return this.tokenService.signToken(
      { userId: findUser.id, username: findUser.username },
      { expiresIn: "15m" },
    );
  }
}
