import Elysia from "elysia";
import { login, register } from "./users.service";
import { CreateUserRequest } from "./dto/createUser.dto";
import { LoginUserRequest } from "./dto/loginUser.dto";

export const UsersModule = new Elysia({ prefix: "/users" })
  .post(
    "/register",
    ({ body }) => {
      return register(body);
    },
    {
      body: CreateUserRequest,
    },
  )
  .post(
    "/login",
    ({ body }) => {
      return login(body);
    },
    {
      body: LoginUserRequest,
    },
  );
