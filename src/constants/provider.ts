import { TypeUser } from 'services/UserServices/UserService';

export const providers = [
  {
    email: 'provider@gmail.com',
    password: 'Provider#1234',
    password_confirm: 'Provider#1234',
    type_user: 'provider' as TypeUser,
  },
];
