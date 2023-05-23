import { prisma } from 'config/index'
import { IRole } from '../models'
import { ICreateRoleService } from './CreateRoleService'

export const UpdateRoleService = async ({
  role,
}: ICreateRoleService): Promise<IRole> => {
  const { id_user_role } = role
  delete role.id_user_role

  const roleUpdated = await prisma.userRole.update({
    where: {
      id_user_role,
    },
    data: role,
  })

  return roleUpdated
}
