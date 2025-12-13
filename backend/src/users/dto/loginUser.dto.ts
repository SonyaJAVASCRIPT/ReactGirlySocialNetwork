import { Static, t } from "elysia";

export const LoginUserRequest = t.Object({
  email: t.String({ format: "email" }),
  password: t.String({ minLength: 8 }),
});
export type LoginUserRequstType = Static<typeof LoginUserRequest>;

export const LoginUserResponse = t.Object({
  email: t.String({ format: "email" }),
  username: t.String({ minLength: 3 }),
  password: t.String({ minLength: 6 }),
});
export type LoginUserResponseType = Static<typeof LoginUserResponse>;
