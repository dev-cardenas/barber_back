import { prisma } from 'config/index'
import { IPermission } from '../models'

export const GetAllPermissionService = async (): Promise<IPermission[]> => {
  const permission = await prisma.userPermission.findMany()

  return permission
}
