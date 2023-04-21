import User from 'database/entities/User';
import { UserRepository } from 'repositories/index';
import { GetUserRequest } from './UserService';

export class GetUserService {
  async execute({ id_user }: GetUserRequest): Promise<User | Error> {
    const repoUser = UserRepository();

    const user = await repoUser.findOne({ where: { id_user } });

    if (!user) {
      return new Error('User does not exists!');
    }

    return user;
  }
}
