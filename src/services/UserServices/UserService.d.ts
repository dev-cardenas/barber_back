type UserRequest = {
  email: string;
  password: string;
  password_confirm: string;
};

export type GetUserRequest = {
  id_user: string;
};
export type PutUserRequest = UserRequest & GetUserRequest;
