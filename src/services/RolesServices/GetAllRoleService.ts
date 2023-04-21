import UserRoles from 'database/entities/UserRoles';
import { UserRolesRepository } from 'repositories/index';

export class GetAllRoleService {
  async execute(): Promise<UserRoles[] | Error> {
    const roles = await UserRolesRepository().find();
    return roles;
  }
}
