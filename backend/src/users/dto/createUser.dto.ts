import { Static, t } from "elysia";

export const CreateUserRequest = t.Object({
  email: t.String({ format: "email" }),
  username: t.String({ minLength: 3 }),
  password: t.String({ minLength: 8 }),
});
export type CreateUserRequstType = Static<typeof CreateUserRequest>;

export const CreateUserResponse = t.Object({
  email: t.String({ format: "email" }),
  username: t.String({ minLength: 3 }),
  password: t.String({ minLength: 6 }),
});
export type CreateUserResponseType = Static<typeof CreateUserResponse>;
