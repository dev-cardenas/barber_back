import { Request, Response } from 'express';
import { GetRoleService } from 'services/RolesServices/index';

export class GetRolesController {
  async handle(request: Request, response: Response) {
    const { id_user_roles } = request.params;

    const getRolesServices = new GetRoleService();

    const result = await getRolesServices.execute({ id_user_roles });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
