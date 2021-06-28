import { Request, Response, NextFunction } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;

    const listUserSendComplimentsServeice =
      new ListUserSendComplimentsService();

    const compliments = await listUserSendComplimentsServeice.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSendComplimentsController };
