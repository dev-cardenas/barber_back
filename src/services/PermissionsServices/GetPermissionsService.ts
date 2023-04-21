import UserPermissions from 'database/entities/UserPermissions';
import { UserPermissionsRepository } from 'repositories/index';

type GetPermissionRequest = {
  id_user_permissions: string;
};

export class GetPermissionsService {
  async execute({ id_user_permissions }: GetPermissionRequest): Promise<UserPermissions | Error> {
    const repoPermissions = UserPermissionsRepository();

    const permissions = await repoPermissions.findOne({ where: { id_user_permissions } });

    if (!permissions) {
      return new Error('Permissions does not exists!');
    }

    return permissions;
  }
}
