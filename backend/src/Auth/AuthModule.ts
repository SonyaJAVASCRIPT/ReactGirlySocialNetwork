import { Controller } from "../Core/Controller.ts";
import { Module } from "../Core/Module.ts";
import { UserRepository } from "../Users/UserRepository.ts";
import { AuthController } from "./AuthController.ts";
import { AuthService } from "./AuthService.ts";
import { TokenService } from "./TokenService.ts";

export class AuthModule implements Module {
  private authService: AuthService;
  constructor() {
    this.authService = new AuthService(
      new UserRepository(),
      new TokenService(),
    );
    console.log("Auth module initialized!");
  }
  public createControllers(app: any): Controller[] {
    return [new AuthController(app, this.authService)];
  }
}
