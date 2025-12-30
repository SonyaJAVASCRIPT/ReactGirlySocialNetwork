import { Controller } from "../../core/Controller.ts";
import { Module } from "../../core/Module.ts";
import { AuthService } from "../Auth/AuthService.ts";
import { UserController } from "./UserController.ts";
import { UserRepository } from "./UserRepository.ts";
import { UserService } from "./UserService.ts";

export class UserModule implements Module {
  private userService: UserService;
  constructor() {
    this.userService = new UserService(new UserRepository(), new AuthService());
    console.log("User module initialized!");
  }
  public createControllers(app: any): Controller[] {
    return [new UserController(app, this.userService)];
  }
}
