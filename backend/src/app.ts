import { Elysia } from "elysia";
import { UsersModule } from "./users/users.controller";
const app = new Elysia().use(UsersModule).listen(6969);
if (app.server) {
  console.log(
    `Yuppiie. Server is running at ${app.server.hostname}:${app.server.port}`,
  );
}
