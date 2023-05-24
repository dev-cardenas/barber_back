import { prisma } from 'config/index'
import { IRole } from '../models'

interface IDeleteByIdRoleService {
  id_user_role: string
}

export const DeleteByIdRoleService = async ({
  id_user_role,
}: IDeleteByIdRoleService): Promise<IRole> => {
  const roleUpdated = await prisma.userRole.update({
    where: {
      id_user_role,
    },
    data: {
      is_delete: true,
    },
  })

  return roleUpdated
}
