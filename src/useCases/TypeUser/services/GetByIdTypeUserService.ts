import { prisma } from 'config/index'
import { ITypeUser } from '../models'

interface IGetByIdTypeUserService {
  id_type_user: string
}

export const GetByIdTypeUserService = async ({
  id_type_user,
}: IGetByIdTypeUserService): Promise<ITypeUser> => {
  const typeUser = await prisma.typeUser.findUnique({
    where: {
      id_type_user,
    },
  })

  return typeUser
}
