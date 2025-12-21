import { Application } from "express";

export abstract class Controller {
  protected constructor(protected readonly app: Application) {}
  public init(): void {
    this.initRoutes();
  }
  protected abstract initRoutes(): void;
}
