import { prisma } from 'config/index'
import { ICompany } from '../models'

interface IGetByIdCompanyService {
  id_company: string
}

export const GetByIdCompanyService = async ({
  id_company,
}: IGetByIdCompanyService): Promise<ICompany> => {
  const company = await prisma.company.findUnique({
    where: {
      id_company,
    },
  })

  return company
}
