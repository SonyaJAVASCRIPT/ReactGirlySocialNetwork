import { Application, Request, Response } from "express";
import { Controller } from "../Core/Controller";
import { UserService } from "./UserService";
import { CreateUserDTO } from "./dto/createUser.dto";
import { validateBody } from "../Middlewares/validationMiddleware";
import { InferBody } from "../Utils/inferBody";
import { asyncHandler } from "../Utils/asyncHandler";
import { authMiddleware } from "../Middlewares/authMiddleware";
import { Unauthorized } from "../Utils/customError";
export class UserController extends Controller {
  constructor(
    app: Application,
    private readonly userService: UserService,
  ) {
    super(app);
  }

  protected initRoutes(): void {
    this.app.get(
      "/api/user/me",
      validateBody(CreateUserDTO),
      authMiddleware,
      asyncHandler(this.getMe.bind(this)),
    );
  }

  public async getMe(req: Request, res: Response) {
    if (!req.user) {
      throw Unauthorized;
    }
    return res.json(this.userService.getMe(req.user));
  }
}
