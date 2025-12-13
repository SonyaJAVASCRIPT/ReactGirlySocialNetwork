import { NotFoundException } from "../utils/error";
import {
  CreateUserRequstType,
  CreateUserResponseType,
} from "./dto/createUser.dto";
import {
  LoginUserRequstType,
  LoginUserResponseType,
} from "./dto/loginUser.dto";
import { UsersRepository } from "./users.repository";
const userRepository = new UsersRepository();

export async function register(
  body: CreateUserRequstType,
): Promise<CreateUserResponseType> {
  return await userRepository.create(body);
}
export async function login(
  body: LoginUserRequstType,
): Promise<LoginUserResponseType> {
  return await userRepository.login(body);
}
