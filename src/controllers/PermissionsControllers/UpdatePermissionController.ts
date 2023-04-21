import { Request, Response } from 'express';
import { UpdatePermissionsService } from 'services/PermissionsServices/index';

export class UpdatePermissionController {
  async handle(request: Request, response: Response) {
    const { id_user_permissions } = request.params;

    const updatePermissionsService = new UpdatePermissionsService();

    const result = await updatePermissionsService.execute({
      id_user_permissions,
      ...request.body,
    });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
