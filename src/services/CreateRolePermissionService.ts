import { In } from 'typeorm';
import UserRoles from 'database/entities/UserRoles';
import { UserPermissionsRepository, UserRolesRepository } from 'repositories/index';

type RolePermissionRequest = {
  id_user_roles: string;
  permissions: string[];
};

export class CreateRolePermissionService {
  async execute({ id_user_roles, permissions }: RolePermissionRequest): Promise<UserRoles | Error> {
    const repoRoles = UserRolesRepository();

    const role = await repoRoles.findOne({ where: { id_user_roles } });

    if (!role) {
      return new Error('Role does not exists!');
    }

    const permissionsExists = await UserPermissionsRepository().findBy({
      id_user_permissions: In(permissions),
    });

    role.permission = permissionsExists;

    await repoRoles.save(role);

    return role;
  }
}
