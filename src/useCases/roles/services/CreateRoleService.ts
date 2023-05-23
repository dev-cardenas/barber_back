import { prisma } from 'config/index'
import { IRole } from '../models'

export interface ICreateRoleService {
  role: IRole
}

export interface IResponseCreateRoleService extends IRole {
  id_user_role?: string
  error?: string
}

export const CreateRoleService = async ({
  role,
}: ICreateRoleService): Promise<IResponseCreateRoleService> => {
  const roleSaved = await prisma.userRole.findUnique({
    where: {
      user_role: role.user_role,
    },
  })

  if (!roleSaved) {
    return {
      error: 'Rola name invalid',
    }
  }

  if (!role.user_role) {
    return {
      error: 'Rola name invalid',
    }
  }

  const newRole = await prisma.userRole.create({
    data: {
      user_role: role.user_role,
      ...role,
    },
  })

  return newRole
}
