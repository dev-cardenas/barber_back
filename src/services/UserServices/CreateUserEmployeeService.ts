import { hash } from 'bcrypt';
import User from 'database/entities/User';
import { UserRepository, UserRolesRepository } from 'repositories/index';
import { userSchema } from 'helpers/userSchema';
import { employee } from 'constants/roles';
import { UserRequest } from './UserService';

export class CreateUserEmployeeService {
  async execute({ password, email, password_confirm }: UserRequest): Promise<Error | User> {
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

    const existRole = await UserRolesRepository().findOne({ where: { user_role: employee.user_role } });

    if (existRole) {
      return new Error('An error ocurred. Can you speak to the support team?');
    }

    const password_hash = await hash(password, 8);

    const user = UserRepository().create({ email, password_hash, user_roles: [existRole] });

    await UserRepository().save(user);

    delete user.password_hash;
    return user;
  }
}
