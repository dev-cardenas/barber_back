import { prisma } from 'config/index'
import { ICompany } from '../models'

export const GetAllCompanyService = async (): Promise<ICompany[]> => {
  const company = await prisma.company.findMany()

  return company
}
