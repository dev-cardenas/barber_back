import { prisma } from 'config/index'
import { IRole } from '../models'

interface IGetByIdRoleService {
  id_user_role: string
}

export const GetByIdRoleService = async ({
  id_user_role,
}: IGetByIdRoleService): Promise<IRole> => {
  const role = await prisma.userRole.findUnique({
    where: {
      id_user_role,
    },
  })

  return role
}
