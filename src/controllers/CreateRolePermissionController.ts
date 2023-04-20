import { Request, Response } from "express";
import { CreateRolePermissionService } from "../services/CreateRolePermissionService";

export class CreateRolePermissionController {
  async handle(request: Request, response: Response) {
    const { id_user_roles } = request.params;
    const { permissions } = request.body;

    const createRolePermissionService = new CreateRolePermissionService();

    const result = await createRolePermissionService.execute({
      id_user_roles,
      permissions,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
