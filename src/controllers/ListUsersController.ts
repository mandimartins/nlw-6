import { Request, Response, NextFunction } from "express";
import { ListUserService } from "../services/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const listUsersService = new ListUserService();
    const users = await listUsersService.execute();

    return response.json(users);
  }
}

export { ListUsersController };
