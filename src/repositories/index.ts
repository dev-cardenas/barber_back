import { AppDataSource } from 'config/data-source';

import User from 'database/entities/User';
import UserPermissions from 'database/entities/UserPermissions';
import UserRoles from 'database/entities/UserRoles';

export const UserRepository = () => {
  return AppDataSource.getRepository(User);
};

export const UserPermissionsRepository = () => {
  return AppDataSource.getRepository(UserPermissions);
};

export const UserRolesRepository = () => {
  return AppDataSource.getRepository(UserRoles);
};
