import { Request, Response } from 'express';
import { UpdateRolesService } from 'services/RolesServices/index';

export class UpdateRolesController {
  async handle(request: Request, response: Response) {
    const { id_user_roles } = request.params;

    const updateRoleService = new UpdateRolesService();

    const result = await updateRoleService.execute({
      id_user_roles,
      ...request.body,
    });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
