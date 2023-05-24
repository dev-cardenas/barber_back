import { prisma } from 'config/index'
import { IBrand } from '../models'
import { ICreateBrandService } from './CreateBrandService'

export const UpdateBrandService = async ({
  brand,
}: ICreateBrandService): Promise<IBrand> => {
  const { id_brand } = brand
  delete brand.id_brand

  const brandUpdated = await prisma.brand.update({
    where: {
      id_brand,
    },
    data: brand,
  })

  return brandUpdated
}
