import UserRoles from 'database/entities/UserRoles';
import { UserRolesRepository } from 'repositories/index';
import { RoleRequestUpdate } from './RolesService';

export class UpdateRolesService {
  async execute({ id_user_roles, ...body }: RoleRequestUpdate): Promise<UserRoles | Error> {
    const repoUserRoles = UserRolesRepository();

    const rolesSaved = await repoUserRoles.findOne({ where: { id_user_roles } });

    if (!rolesSaved) {
      return new Error('Permission not exists');
    }

    const permission = await repoUserRoles.update(
      {
        id_user_roles,
      },
      {
        ...rolesSaved,
        ...body,
      },
    );

    return permission as UserRoles;
  }
}
