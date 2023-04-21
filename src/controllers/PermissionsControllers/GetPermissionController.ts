import { Request, Response } from 'express';
import { GetPermissionsService } from 'services/PermissionsServices/index';

export class GetPermissionController {
  async handle(request: Request, response: Response) {
    const { id_user_permissions } = request.params;

    const getPermissionsServices = new GetPermissionsService();

    const result = await getPermissionsServices.execute({ id_user_permissions });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
