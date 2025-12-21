import express, { Application } from "express";
import { Controller } from "./Controller";
import { Module } from "./Module";
export class App {
  public express: Application;
  private port: number;
  private controllers: Controller[] = [];
  constructor(
    private modules: (new () => Module)[],
    port: number,
  ) {
    this.express = express();
    this.port = port;
    this.initMiddlewares();
    this.initModules();
  }
  private initMiddlewares() {
    this.express.use(express.json());
    this.express.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        if (err instanceof SyntaxError && "body" in err) {
          return res.status(400).json({ error: "Invalid JSON" });
        }
        next();
      },
    );
  }
  private initModules() {
    this.modules.forEach((ModuleClass) => {
      const moduleInstance = new ModuleClass();
      const moduleControllers = moduleInstance.createControllers(this.express);
      moduleControllers.forEach((c) => c.init());
      this.controllers.push(...moduleControllers);
    });
  }
  public listen() {
    this.express.listen(this.port, () => {
      console.log("Server started at port:", this.port);
    });
    return this;
  }
}
