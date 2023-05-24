import { prisma } from 'config/index'
import { IAccountPlan } from '../models'

interface IDeleteByIdAccountPlanService {
  id_account_plan: string
}

export const DeleteByIdAccountPlanService = async ({
  id_account_plan,
}: IDeleteByIdAccountPlanService): Promise<IAccountPlan> => {
  const accountPlanUpdated = await prisma.accountPlan.update({
    where: {
      id_account_plan,
    },
    data: {
      is_delete: true,
    },
  })

  return accountPlanUpdated
}
