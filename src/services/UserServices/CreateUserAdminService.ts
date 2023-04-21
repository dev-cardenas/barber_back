import { hash } from 'bcrypt';
import { object, string, ref } from 'yup';
import User from 'database/entities/User';
import { UserRepository, UserRolesRepository } from 'repositories/index';

type UserRequest = {
  email: string;
  password: string;
  password_confirm: string;
};

const userSchema = object({
  email: string().email().trim(),
  password: string()
    .required('Please enter your password')
    .min(8, 'at least 8 chars')
    .matches(/[a-z]/, 'at least one lowercase char')
    .matches(/[A-Z]/, 'at least one uppercase char')
    .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')
    .trim(),
  password_confirm: string()
    .required('Please enter your password_confirm')
    .oneOf([ref('password'), null], "Passwords don't match")
    .trim(),
});

export class CreateUserAdminService {
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

    const existRole = await UserRolesRepository().findOne({ where: { user_role: 'administrator' } });

    if (existRole) {
      return new Error('An error ocurred. Can you check your Admin Role in DB?');
    }

    const password_hash = await hash(password, 8);

    const user = UserRepository().create({ email, password_hash, user_roles: [existRole] });

    await UserRepository().save(user);

    delete user.password_hash;
    return user;
  }
}
