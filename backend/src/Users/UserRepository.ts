import { prismaClient } from "../prisma";
import { CreateUserDTOType } from "./dto/createUser.dto";

export class UserRepository {
  async findUserByUuid(id: string) {
    return prismaClient.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async findUser(username: string) {
    return prismaClient.user.findUnique({
      where: {
        username: username,
      },
    });
  }
  async createUser(user: CreateUserDTOType) {
    return prismaClient.user.create({
      data: user,
    });
  }
}
