import { App } from "./src/Core/Application.ts";
import { AuthModule } from "./src/Auth/AuthModule.ts";
import { UserModule } from "./src/Users/UserModule.ts";

const modules = [UserModule, AuthModule];
const app = new App(modules, 6969);
app.listen();
