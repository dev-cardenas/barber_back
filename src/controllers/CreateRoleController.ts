import { Request, Response } from "express";
import { CreateRoleService } from "../services/CreateRoleService";

export class CreateRoleController {
  async handle(request: Request, response: Response) {
    const { user_role, description } = request.body;

    const createRoleService = new CreateRoleService();

    const result = await createRoleService.execute({ user_role, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
