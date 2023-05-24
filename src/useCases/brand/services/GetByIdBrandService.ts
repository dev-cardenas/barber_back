import { prisma } from 'config/index'
import { IBrand } from '../models'

interface IGetByIdBrandService {
  id_brand: string
}

export const GetByIdBrandService = async ({
  id_brand,
}: IGetByIdBrandService): Promise<IBrand> => {
  const brand = await prisma.brand.findUnique({
    where: {
      id_brand,
    },
  })

  return brand
}
