import { prisma } from 'config/index'
import { ICompany, IAllOpcionalCompany } from '../models'

interface IUpdateCompanyService {
  company: IAllOpcionalCompany
}

export const UpdateCompanyService = async ({
  company,
}: IUpdateCompanyService): Promise<ICompany> => {
  const { id_company } = company
  delete company.id_company

  const companyUpdated = await prisma.company.update({
    where: {
      id_company,
    },
    data: company,
  })

  return companyUpdated
}
