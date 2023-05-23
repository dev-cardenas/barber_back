import { prisma } from 'config/index'
import { IPermission } from '../models'
import { ICreatePermissionService } from './CreatePermissionService'

export const UpdatePermissionService = async ({
  permission,
}: ICreatePermissionService): Promise<IPermission> => {
  const { id_user_permission } = permission
  delete permission.id_user_permission

  const permissionUpdated = await prisma.userPermission.update({
    where: {
      id_user_permission,
    },
    data: permission,
  })

  return permissionUpdated
}
