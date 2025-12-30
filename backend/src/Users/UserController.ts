import { Application, Request, Response } from "express";
import { Controller } from "../../core/Controller";
import { UserService } from "./UserService";
import { CreateUserDTO } from "./dto/createUser.dto";
import { validateBody } from "../../utils/validateBody";
import { InferBody } from "../../utils/inferBody";
import { asyncHandler } from "../../utils/asyncHandler";
import { authMiddleware } from "../Middlewares/Auth.middleware";
export class UserController extends Controller {
  constructor(
    app: Application,
    private readonly userService: UserService,
  ) {
    super(app);
  }

  protected initRoutes(): void {
    this.app.post(
      "/api/user/signUp",
      validateBody(CreateUserDTO),
      asyncHandler(this.signUp.bind(this)),
    );
    this.app.post(
      "/api/user/signIn",
      validateBody(CreateUserDTO),
      asyncHandler(this.signIn.bind(this)),
    );
    this.app.get(
      "/api/user/me",
      authMiddleware,
      asyncHandler(this.getUserFromToken.bind(this)),
    );
  }

  public async getUserFromToken(req: Request, res: Response) {
    ``;
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, error: { message: "Unauthorized" } });
    }

    return res.json({
      success: true,
      data: req.user,
    });
  }
  public async signUp(req: InferBody<typeof CreateUserDTO>, res: Response) {
    return res.json(await this.userService.signUp(req.body));
  }
  public async signIn(req: InferBody<typeof CreateUserDTO>, res: Response) {
    return res.json(await this.userService.signIn(req.body));
  }
}
