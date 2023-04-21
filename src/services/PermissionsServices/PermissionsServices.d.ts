export type PermissionRequest = {
  name: string;
  description: string;
};

export type PermissionRequestUpdate = PermissionRequest & {
  id_user_permissions: string;
};
