import { App } from "./core/Application.ts";
import { UserModule } from "./src/Users/UserModule.ts";

const modules = [UserModule];
const app = new App(modules, 6969);
app.listen();
