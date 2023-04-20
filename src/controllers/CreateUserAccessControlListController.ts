import { Request, Response } from "express";
import { CreateUserAccessControlListService } from "../services/CreateUserAccessControlListService";

export class CreateUserAccessControlListController {
  async handle(request: Request, response: Response) {
    const { permissions, roles } = request.body;
    const { id_user } = request;

    const createUserACLService = new CreateUserAccessControlListService();

    const result = await createUserACLService.execute({
      id_user,
      permissions,
      roles,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
