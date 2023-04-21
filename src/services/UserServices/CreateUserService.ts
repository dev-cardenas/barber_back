import { hash } from 'bcrypt';
import User from 'database/entities/User';
import { UserRepository, UserRolesRepository } from 'repositories/index';
import { userSchema } from 'helpers/userSchema';
import { UserRequest } from './UserService';

export class CreateUserService {
  async execute({ password, email, password_confirm, type_user = 'customer' }: UserRequest): Promise<Error | User> {
    try {
      await userSchema.validate({
        email,
        password,
        password_confirm,
      });
    } catch (err) {
      return new Error(err.errors.join(' '));
    }

    const existUser = await UserRepository().findOne({ where: { email } });

    if (existUser) {
      return new Error('Can you check your mail?');
    }

    const existRole = await UserRolesRepository().findOne({ where: { user_role: type_user } });

    if (existRole) {
      return new Error('An error ocurred.');
    }

    const password_hash = await hash(password, 8);

    const user = UserRepository().create({ email, password_hash, user_roles: [existRole] });

    await UserRepository().save(user);

    delete user.password_hash;
    return user;
  }
}
