import { Request, Response } from 'express';
import { CreateUserService } from 'services/UserServices/index';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password, password_confirm, type_user, name, last_name } = request.body;

    const createUserService = new CreateUserService();
    const result = await createUserService.execute({ email, name, last_name, password, password_confirm, type_user });

    if (result instanceof Error) {
      return response.status(400).json({
        message: result.message,
      });
    }

    return response.json(result);
  }
}
