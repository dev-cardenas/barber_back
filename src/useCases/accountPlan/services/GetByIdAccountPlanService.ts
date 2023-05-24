import { prisma } from 'config/index'
import { IAccountPlan } from '../models'

interface IGetByIdAccountPlanService {
  id_account_plan: string
}

export const GetByIdAccountPlanService = async ({
  id_account_plan,
}: IGetByIdAccountPlanService): Promise<IAccountPlan> => {
  const accountPlan = await prisma.accountPlan.findUnique({
    where: {
      id_account_plan,
    },
  })

  return accountPlan
}
