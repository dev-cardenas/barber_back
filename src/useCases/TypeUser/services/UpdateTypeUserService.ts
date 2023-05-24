import { prisma } from 'config/index'
import { ITypeUser } from '../models'
import { ICreateTypeUserService } from './CreateTypeUserService'

export const UpdateTypeUserService = async ({
  typeUser,
}: ICreateTypeUserService): Promise<ITypeUser> => {
  const { id_type_user } = typeUser
  delete typeUser.id_type_user

  const typeUserUpdated = await prisma.typeUser.update({
    where: {
      id_type_user,
    },
    data: typeUser,
  })

  return typeUserUpdated
}
