import { prisma } from 'config/index'
import { IPermission } from '../models'

export interface ICreatePermissionService {
  permission: IPermission
}

export interface IResponseCreatePermissionService extends IPermission {
  error?: string
}

export const CreatePermissionService = async ({
  permission,
}: ICreatePermissionService): Promise<IResponseCreatePermissionService> => {
  const permissionSaved = await prisma.userPermission.findUnique({
    where: {
      user_permission: permission.user_permission,
    },
  })

  if (!permissionSaved) {
    return {
      error: 'Permission name invalid',
    }
  }

  if (!permission.user_permission) {
    return {
      error: 'Permission name invalid',
    }
  }

  const newPermission = await prisma.userPermission.create({
    data: {
      user_permission: permission.user_permission,
      ...permission,
    },
  })

  return newPermission
}
