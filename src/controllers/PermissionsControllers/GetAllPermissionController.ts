import { Request, Response } from 'express';
import { GetAllPermissionsService } from 'services/PermissionsServices/GetAllPermissionsService';

export class GetAllPermissionController {
  async handle(request: Request, response: Response) {
    const getAllPermissionsServices = new GetAllPermissionsService();

    const result = await getAllPermissionsServices.execute();

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
