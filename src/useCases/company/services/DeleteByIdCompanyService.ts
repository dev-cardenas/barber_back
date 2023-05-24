import { prisma } from 'config/index'
import { ICompany } from '../models'

interface IDeleteByIdCompanyService {
  id_company: string
}

export const DeleteByIdCompanyService = async ({
  id_company,
}: IDeleteByIdCompanyService): Promise<ICompany> => {
  const companyUpdated = await prisma.company.update({
    where: {
      id_company,
    },
    data: {
      is_delete: true,
    },
  })

  return companyUpdated
}
