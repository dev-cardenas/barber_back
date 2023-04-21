import { Request, Response } from 'express';
import { GetAllRoleService } from 'services/RolesServices/index';

export class GetAllRolesController {
  async handle(request: Request, response: Response) {
    const getAllRolesServices = new GetAllRoleService();

    const result = await getAllRolesServices.execute();

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
