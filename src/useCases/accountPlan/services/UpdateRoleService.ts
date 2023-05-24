import { prisma } from 'config/index'
import { IRole } from '../models'
import { ICreateRoleService } from './CreateRoleService'

export const UpdateRoleService = async ({
  role,
}: ICreateRoleService): Promise<IRole> => {
  const { name } = role
  delete role.name

  const roleUpdated = await prisma.userRole.update({
    where: {
      name,
    },
    data: role,
  })

  return roleUpdated
}
