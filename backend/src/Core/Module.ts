import { Controller } from "./Controller";

export interface Module {
  createControllers(app: any): Controller[];
}
