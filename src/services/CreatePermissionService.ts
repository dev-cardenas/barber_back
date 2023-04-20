import UserPermissions from 'database/entities/UserPermissions';
import { UserPermissionsRepository } from 'repositories/index';

type PermissionRequest = {
  name: string;
  description: string;
};

export class CreatePermissionService {
  async execute({ name, description }: PermissionRequest): Promise<UserPermissions | Error> {
    const repoUserPermissions = UserPermissionsRepository();

    if (await repoUserPermissions.findOne({ where: { name } })) {
      return new Error('Permission already exists');
    }

    const permission = repoUserPermissions.create({ name, description });

    await repoUserPermissions.save(permission);

    return permission;
  }
}
