import { prisma } from 'config/index'
import { IAccountPlan } from '../models'

export interface ICreateAccountPlanService {
  accountPlan: IAccountPlan
}

export interface IResponseCreateAccountPlanService {
  accountPlan?: IAccountPlan
  error?: string
}

export const CreateAccountPlanService = async ({
  accountPlan,
}: ICreateAccountPlanService): Promise<IResponseCreateAccountPlanService> => {
  const accountPlanSaved = await prisma.accountPlan.findUnique({
    where: {
      name: accountPlan.name,
    },
  })

  if (!accountPlanSaved) {
    return {
      error: 'AccountPlan name invalid',
    }
  }

  const newAccountPlan = await prisma.accountPlan.create({
    data: accountPlan,
  })

  return { accountPlan: newAccountPlan }
}
