import { Application, Request, Response } from "express";
import { Controller } from "../../core/Controller";
import { UserService } from "./UserService";
import { CreateUserDTO } from "./dto/createUser.dto";
import { validateBody } from "../../utils/validateBody";
import { InferBody } from "../../utils/inferBody";

export class UserController extends Controller {
  constructor(
    app: Application,
    private readonly userService: UserService,
  ) {
    super(app);
  }

  protected initRoutes(): void {
    this.app.post(
      "/api/users",
      validateBody(CreateUserDTO),
      this.findAll.bind(this),
    );
  }
  public findAll(req: InferBody<typeof CreateUserDTO>, res: Response) {
    const body = req.body;
    res.json(body);
  }
}
