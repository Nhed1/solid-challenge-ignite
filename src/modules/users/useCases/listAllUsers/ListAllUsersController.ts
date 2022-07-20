import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    console.log(user_id);
    try {
      const users = this.listAllUsersUseCase.execute(user_id);
      return response.json(users);
    } catch (message) {
      return response.status(400).json(message);
    }
  }
}

export { ListAllUsersController };
