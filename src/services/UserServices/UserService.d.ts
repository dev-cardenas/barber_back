export type TypeUser = 'provider' | 'customer';

type UserRequest = {
  email: string;
  password: string;
  password_confirm: string;
  type_user?: TypeUser;
};

export type GetUserRequest = {
  id_user: string;
};
export type PutUserRequest = UserRequest & GetUserRequest;
