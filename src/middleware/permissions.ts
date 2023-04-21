import { NextFunction, Request, Response } from 'express';
import { UserRepository } from 'repositories/index';

export function can(permissionsRoutes: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { id_user } = request;

    const user = await UserRepository().findOne({
      where: { id_user: id_user },
      relations: ['user_permissions'],
    });

    if (!user) {
      return response.status(400).json('User does not exists');
    }

    const permissionExists = user.user_permissions
      .map((permission) => permission.name)
      .some((permission) => permissionsRoutes.includes(permission));

    if (!permissionExists) {
      return response.status(401).end();
    }

    return next();
  };
}

export function is(rolesRoutes: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { id_user } = request;

    const user = await UserRepository().findOne({
      where: { id_user: id_user },
      relations: ['user_roles'],
    });

    if (!user) {
      return response.status(400).json('User does not exists');
    }

    const roleExists = user.user_roles.map((role) => role.user_role).some((role) => rolesRoutes.includes(role));

    if (!roleExists) {
      return response.status(401).end();
    }

    return next();
  };
}
