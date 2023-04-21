import { Request, Response } from 'express';
import { CreateUserAdminService } from 'services/UserServices/index';

export class CreateUserAdminController {
  async handle(request: Request, response: Response) {
    const { email, password, password_confirm } = request.body;

    const createUserAdminService = new CreateUserAdminService();
    const result = await createUserAdminService.execute({ email, password, password_confirm });

    if (result instanceof Error) {
      return response.status(400).json({
        message: result.message,
      });
    }

    return response.json(result);
  }
}
