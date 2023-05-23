import { prisma } from 'config/index'
import { IRole } from '../models'

export const GetAllRoleService = async (): Promise<IRole[]> => {
  const role = await prisma.userRole.findMany()

  return role
}
