import { prisma } from 'config/index'
import { ITypeUser } from '../models'

export interface ICreateTypeUserService {
  role: ITypeUser
}

export interface IResponseCreateTypeUserService extends ITypeUser {
  id_type_user?: string
  error?: string
}

export const CreateTypeUserService = async ({
  typeUser,
}: ICreateTypeUserService): Promise<IResponseCreateTypeUserService> => {
  const typeUserSaved = await prisma.typeUser.findUnique({
    where: {
      id_type_user: typeUser,
    },
  })

  if (!typeUserSaved) {
    return {
      error: 'TypeUser name invalid',
    }
  }

  if (!typeUser.type) {
    return {
      error: 'TypeUser name invalid',
    }
  }

  const newTypeUser = await prisma.typeUser.create({
    data: {
      id_type_user: typeUser,
      ...typeUser,
    },
  })

  return newTypeUser
}
