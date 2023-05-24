import { prisma } from 'config/index'
import { ITypeUser } from '../models'

interface IDeleteByIdTypeUserService {
  id_type_user: string
}

export const DeleteByIdTypeUserService = async ({
  id_type_user,
}: IDeleteByIdTypeUserService): Promise<ITypeUser> => {
  const typeUserUpdated = await prisma.typeUser.update({
    where: {
      id_type_user,
    },
    data: {
      is_delete: true,
    },
  })

  return typeUserUpdated
}
