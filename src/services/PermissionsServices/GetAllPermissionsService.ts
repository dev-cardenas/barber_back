import UserPermissions from 'database/entities/UserPermissions';
import { UserPermissionsRepository } from 'repositories/index';

export class GetAllPermissionsService {
  async execute(): Promise<UserPermissions[] | Error> {
    const permissions = await UserPermissionsRepository().find();
    return permissions;
  }
}
