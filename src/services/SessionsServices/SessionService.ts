import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { UserRepository } from 'repositories/index';

type UserRequest = {
  email: string;
  password: string;
};

export class SessionService {
  async execute({ email, password }: UserRequest) {
    const repo = UserRepository();

    const user = await repo.findOne({ where: { email } });

    if (!user) {
      return new Error('Email or password are wrong!');
    }

    const passwordMatch = await compare(password, user.password_hash);

    if (!passwordMatch) {
      return new Error('Email or password are wrong!');
    }

    const access_token = sign({ sub: user.id_user }, process.env.SECRET_JWT);

    return { access_token };
  }
}
