import { prisma } from 'config/index'
import { ICompany } from '../models'

export interface ICreateCompanyService {
  company: ICompany & {
    account_plan_id?: string
  }
}

export interface IResponseCreateCompanyService {
  company?: ICompany
  error?: string
}

export const CreateCompanyService = async ({
  company: { account_plan_id, ...company },
}: ICreateCompanyService): Promise<IResponseCreateCompanyService> => {
  const companySaved = await prisma.company.findUnique({
    where: {
      company_name: company.company_name,
    },
  })

  if (!companySaved) {
    return {
      error: 'Company name invalid',
    }
  }

  if (!company.company_name) {
    return {
      error: 'Company name invalid',
    }
  }

  const account_plan = await prisma.accountPlan.findUnique({
    where: {
      id_account_plan: account_plan_id,
    },
  })

  if (!account_plan) {
    return { error: 'Account Plan invalid ' }
  }

  const companyNew = await prisma.company.create({
    data: {
      ...company,
      account_plan: {
        connect: { id_account_plan: account_plan.id_account_plan },
      },
    },
  })

  return { company: companyNew }
}
