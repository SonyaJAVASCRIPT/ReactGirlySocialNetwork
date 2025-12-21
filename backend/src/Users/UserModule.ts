import { Controller } from "../../core/Controller";
import { Module } from "../../core/Module";
import { UserController } from "./UserController";
import { UserService } from "./UserService";

export class UserModule implements Module {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  public createControllers(app: any): Controller[] {
    return [new UserController(app, this.userService)];
  }
}
