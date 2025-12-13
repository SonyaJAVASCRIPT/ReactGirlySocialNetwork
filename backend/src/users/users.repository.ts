import { prismaClient } from "../prisma";
import {
  IsExistException,
  NotFoundException,
  UnathorizedException,
} from "../utils/error";
import {
  CreateUserRequstType,
  CreateUserResponseType,
} from "./dto/createUser.dto";
import {
  LoginUserRequstType,
  LoginUserResponseType,
} from "./dto/loginUser.dto";
export class UsersRepository {
  private prisma = prismaClient;

  async create(data: CreateUserRequstType): Promise<CreateUserResponseType> {
    const isExist = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (isExist) {
      throw new IsExistException();
    }
    return this.prisma.user.create({
      data: { ...data },
    });
  }
  async login(data: LoginUserRequstType): Promise<LoginUserResponseType> {
    const findUser = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!findUser) {
      throw new NotFoundException();
    }
    return findUser;
  }
}
