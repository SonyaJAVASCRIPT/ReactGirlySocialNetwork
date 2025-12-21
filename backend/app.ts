import { App } from "./core/Application";
import { UserModule } from "./src/Users/UserModule";

const modules = [UserModule];
const app = new App(modules, Number(process.env.PORT));
app.listen();
