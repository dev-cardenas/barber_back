import { prisma } from 'config/index'
import { IBrand } from '../models'

export const GetAllBrandService = async (): Promise<IBrand[]> => {
  const brand = await prisma.brand.findMany()

  return brand
}
