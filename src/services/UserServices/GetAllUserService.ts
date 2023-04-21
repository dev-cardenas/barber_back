import User from 'database/entities/User';
import { UserRepository } from 'repositories/index';

export class GetAllUserService {
  async execute(): Promise<User[] | Error> {
    const user = await UserRepository().find();
    return user;
  }
}
