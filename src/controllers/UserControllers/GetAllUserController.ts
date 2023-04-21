import { Request, Response } from 'express';
import { GetAllUserService } from 'services/UserServices/index';

export class GetAllUserController {
  async handle(request: Request, response: Response) {
    const getAllUserServices = new GetAllUserService();

    const result = await getAllUserServices.execute();

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
