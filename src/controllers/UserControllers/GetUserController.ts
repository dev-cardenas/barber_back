import { Request, Response } from 'express';
import { GetUserService } from 'services/UserServices/index';

export class GetUserController {
  async handle(request: Request, response: Response) {
    const { id_user } = request.params;

    const getUserServices = new GetUserService();

    const result = await getUserServices.execute({ id_user });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
