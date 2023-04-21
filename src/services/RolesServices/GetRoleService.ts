import UserRoles from 'database/entities/UserRoles';
import { UserRolesRepository } from 'repositories/index';
import { GetRoleRequest } from './RolesService';

export class GetRoleService {
  async execute({ id_user_roles }: GetRoleRequest): Promise<UserRoles | Error> {
    const repoRoles = UserRolesRepository();

    const roles = await repoRoles.findOne({ where: { id_user_roles } });

    if (!roles) {
      return new Error('Role does not exists!');
    }

    return roles;
  }
}
