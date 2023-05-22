import { hash } from 'bcrypt';
import User from 'database/entities/User';
import { UserRepository, UserRolesRepository } from 'repositories/index';
import { administrator } from 'constants/roles';
import { userSchema } from 'helpers/userSchema';
import { UserRequest } from './UserService';

export class CreateUserAdminService {
  async execute({ name, last_name, password, email, password_confirm }: UserRequest): Promise<Error | User> {
    try {
      await userSchema.validate({
        name,
        last_name,
        email,
        password,
        password_confirm,
      });
    } catch (err) {
      console.log(err);
      return new Error(err.errors.join(' '));
    }

    const existUser = await UserRepository().findOne({ where: { email } });

    if (!!existUser) {
      return new Error('Can you check your mail?');
    }

    const existRole = await UserRolesRepository().findOne({ where: { user_role: administrator.user_role } });

    if (!existRole) {
      return new Error('An error ocurred. Can you check your Admin Role in DB?');
    }

    const password_hash = await hash(password, 8);

    const user = UserRepository().create({ name, last_name, email, password_hash, user_roles: [existRole] });

    await UserRepository().save(user);

    delete user.password_hash;
    return user;
  }
}
