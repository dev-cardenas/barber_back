export type PermissionRequest = {
  name: string;
  description: string;
};

export type GetPermissionRequest = {
  id_user_permissions: string;
};

export type PermissionRequestUpdate = PermissionRequest & GetPermissionRequest;
