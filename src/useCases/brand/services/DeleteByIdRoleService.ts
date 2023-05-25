import { prisma } from 'config/index'
import { IBrand } from '../models'

interface IDeleteByIdRoleService {
  id_brand: string
}

export const DeleteByIdRoleService = async ({
  id_brand,
}: IDeleteByIdRoleService): Promise<IBrand> => {
  const brand = await prisma.brand.update({
    where: {
      id_brand,
    },
    data: {
      is_delete: true,
    },
  })

  return brand
}
