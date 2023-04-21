import { In } from 'typeorm';
import User from '../database/entities/User';
import UserPermissions from '../database/entities/UserPermissions';
import UserRoles from '../database/entities/UserRoles';

import { UserPermissionsRepository, UserRolesRepository, UserRepository } from 'repositories/index';

type UserACLRequest = {
  id_user: string;
  roles: string[];
  permissions: string[];
};

export class CreateUserAccessControlListService {
  async execute({ id_user, roles, permissions }: UserACLRequest): Promise<User | Error> {
    const repoUser = UserRepository();

    const user = await repoUser.findOne({ where: { id_user } });

    if (!user) {
      return new Error('User does not exists!');
    }

    const permissionsExists = await UserPermissionsRepository().findBy({
      id_user_permissions: In(permissions),
    });

    const rolesExists = await UserRolesRepository().findBy({
      id_user_roles: In(roles),
    });

    user.user_permissions = permissionsExists;
    user.user_roles = rolesExists;

    repoUser.save(user);

    return user;
  }
}
