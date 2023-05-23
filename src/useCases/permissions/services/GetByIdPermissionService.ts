import { prisma } from 'config/index'
import { IPermission } from '../models'

interface IGetByIdPermissionService {
  id_user_permission: string
}

export const GetByIdPermissionService = async ({
  id_user_permission,
}: IGetByIdPermissionService): Promise<IPermission> => {
  const permission = await prisma.userPermission.findUnique({
    where: {
      id_user_permission,
    },
  })

  return permission
}
