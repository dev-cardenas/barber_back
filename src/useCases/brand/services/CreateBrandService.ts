import { prisma } from 'config/index'
import { IBrand } from '../models'

export interface ICreateBrandService {
  brand: IBrand
}

export interface IResponseCreateBrandService extends IBrand {
  id_brand?: string
  error?: string
}

export const CreateBrandService = async ({
  brand,
}: ICreateBrandService): Promise<IResponseCreateBrandService> => {
  const roleSaved = await prisma.userRole.findUnique({
    where: {
      name: brand.name,
    },
  })

  if (!brandSaved) {
    return {
      error: 'Brand name invalid',
    }
  }

  if (!brand.name) {
    return {
      error: 'Brand name invalid',
    }
  }

  const newBrand = await prisma.brand.create({
    data: {
      name: brand.name,
      ...brand,
    },
  })

  return newBrand
}
