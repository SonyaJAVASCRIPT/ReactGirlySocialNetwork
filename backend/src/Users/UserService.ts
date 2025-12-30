import { Conflict, Unauthorized } from "../Utils/customError";
import { AuthService } from "../Auth/AuthService";
import { jwtPayloadType } from "../Auth/types/jwtPayload.type";
import { CreateUserDTOType } from "./dto/createUser.dto";
import { UserRepository } from "./UserRepository";
import * as bcrypt from "bcrypt";

export class UserService {
  async getMe(user: jwtPayloadType) {
    return user;
  }
}
