import UserRoles from 'database/entities/UserRoles';
import { UserRolesRepository } from 'repositories/index';

type RoleRequest = {
  user_role: string;
  description: string;
};

export class CreateRoleService {
  async execute({ user_role, description }: RoleRequest): Promise<UserRoles | Error> {
    const repoUserRole = UserRolesRepository();

    if (await repoUserRole.findOne({ where: { user_role } })) {
      return new Error('Role already exists');
    }

    const role = repoUserRole.create({ user_role, description });

    await repoUserRole.save(role);

    return role;
  }
}
