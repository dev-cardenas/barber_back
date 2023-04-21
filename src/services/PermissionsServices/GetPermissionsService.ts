import UserPermissions from 'database/entities/UserPermissions';
import { UserPermissionsRepository } from 'repositories/index';
import { GetPermissionRequest } from './PermissionsServices';

export class GetPermissionsService {
  async execute({ id_user_permissions }: GetPermissionRequest): Promise<UserPermissions | Error> {
    const repoPermissions = UserPermissionsRepository();

    const permissions = await repoPermissions.findOne({ where: { id_user_permissions } });

    if (!permissions) {
      return new Error('Permission does not exists!');
    }

    return permissions;
  }
}
