import { Request, Response } from 'express';
import { CreateUserEmployeeService } from 'services/UserServices/index';

export class CreateUserEmployeeController {
  async handle(request: Request, response: Response) {
    const { name, last_name, email, password, password_confirm } = request.body;

    const createUserEmployeeService = new CreateUserEmployeeService();
    const result = await createUserEmployeeService.execute({ name, last_name, email, password, password_confirm });

    if (result instanceof Error) {
      return response.status(400).json({
        message: result.message,
      });
    }

    return response.json(result);
  }
}
