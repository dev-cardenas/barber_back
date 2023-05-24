import { prisma } from 'config/index'
import { ITypeUser } from '../models'

export interface ICreateTypeUserService {
  typeUser: ITypeUser
}

export interface IResponseCreateTypeUserService {
  typeUser?: ITypeUser
  error?: string
}

export const CreateTypeUserService = async ({
  typeUser,
}: ICreateTypeUserService): Promise<IResponseCreateTypeUserService> => {
  const typeUserSaved = await prisma.typeUser.findUnique({
    where: {
      type: typeUser.type,
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
      id_type_user: typeUser.id_type_user,
      ...typeUser,
    },
  })

  return { typeUser: newTypeUser }
}
