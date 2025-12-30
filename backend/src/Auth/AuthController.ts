import { Application, Request, Response } from "express";
import { Controller } from "../Core/Controller";
import { validateBody } from "../Middlewares/validationMiddleware";
import { InferBody } from "../Utils/inferBody";
import { asyncHandler } from "../Utils/asyncHandler";
import { CreateUserDTO } from "./dto/createUser.dto";
import { AuthService } from "./AuthService";
export class AuthController extends Controller {
  constructor(
    app: Application,
    private readonly authService: AuthService,
  ) {
    super(app);
  }
  protected initRoutes(): void {
    this.app.post(
      "/api/auth/signUp",
      validateBody(CreateUserDTO),
      asyncHandler(this.signUp.bind(this)),
    );
    this.app.post(
      "/api/auth/signIn",
      validateBody(CreateUserDTO),
      asyncHandler(this.signIn.bind(this)),
    );
  }

  public async signUp(req: InferBody<typeof CreateUserDTO>, res: Response) {
    return res.json(await this.authService.signUp(req.body));
  }
  public async signIn(req: InferBody<typeof CreateUserDTO>, res: Response) {
    return res.json(await this.authService.signIn(req.body));
  }
}
