import { prisma } from 'config/index'
import { IAccountPlanToUpdate } from '../models'

interface IUpdateAccountPlanService {
  accountPlan: IAccountPlanToUpdate
}

export const UpdateAccountPlanService = async ({
  accountPlan,
}: IUpdateAccountPlanService): Promise<IAccountPlanToUpdate> => {
  const { id_account_plan } = accountPlan
  delete accountPlan.id_account_plan

  const roleUpdated = await prisma.accountPlan.update({
    where: {
      id_account_plan,
    },
    data: accountPlan,
  })

  return roleUpdated
}
