import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, password, password_confirm } = request.body;

    const createUserService = new CreateUserService();
    const result = await createUserService.execute({ email, password, password_confirm });

    if (result instanceof Error) {
      return response.status(400).json({
        message: result.message,
      });
    }

    return response.json(result);
  }
}
