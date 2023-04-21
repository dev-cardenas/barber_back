export type RoleRequest = {
  user_role: string;
  description: string;
};

export type GetRoleRequest = {
  id_user_roles: string;
};

export type RoleRequestUpdate = RoleRequest & GetRoleRequest;
