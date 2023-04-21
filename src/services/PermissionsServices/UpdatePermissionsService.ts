import UserPermissions from 'database/entities/UserPermissions';
import { UserPermissionsRepository } from 'repositories/index';
import { PermissionRequestUpdate } from './PermissionsServices';

export class UpdatePermissionsService {
  async execute({ id_user_permissions, ...body }: PermissionRequestUpdate): Promise<UserPermissions | Error> {
    const repoUserPermissions = UserPermissionsRepository();

    const permissionSaved = await repoUserPermissions.findOne({ where: { id_user_permissions } });

    if (!permissionSaved) {
      return new Error('Permission not exists');
    }

    const permission = await repoUserPermissions.update(
      {
        id_user_permissions,
      },
      {
        ...permissionSaved,
        ...body,
      },
    );

    return permission as UserPermissions;
  }
}
