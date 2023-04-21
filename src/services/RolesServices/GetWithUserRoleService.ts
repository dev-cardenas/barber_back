import UserRoles from 'database/entities/UserRoles';
import { UserRolesRepository } from 'repositories/index';
import { GetRoleWithUserRoleRequest } from './RolesService';

export class GetWithUserRoleService {
  async execute({ user_role }: GetRoleWithUserRoleRequest): Promise<UserRoles | Error> {
    const repoRoles = UserRolesRepository();

    const roles = await repoRoles.findOne({ where: { user_role } });

    if (!roles) {
      return new Error('Role does not exists!');
    }

    return roles;
  }
}
