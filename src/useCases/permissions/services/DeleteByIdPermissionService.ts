import { prisma } from 'config/index'
import { IPermission } from '../models'

interface IDeleteByIdPermissionService {
  id_user_permission: string
}

export const DeleteByIdPermissionService = async ({
  id_user_permission,
}: IDeleteByIdPermissionService): Promise<IPermission> => {
  const permissionUpdated = await prisma.userPermission.update({
    where: {
      id_user_permission,
    },
    data: {
      is_delete: true,
    },
  })

  return permissionUpdated
}
