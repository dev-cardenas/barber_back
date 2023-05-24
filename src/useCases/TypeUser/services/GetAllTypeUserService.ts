import { prisma } from 'config/index'
import { ITypeUser } from '../models'

export const GetAllTypeUserService = async (): Promise<ITypeUser[]> => {
  const typeUser = await prisma.typeUser.findMany()

  return typeUser
}
