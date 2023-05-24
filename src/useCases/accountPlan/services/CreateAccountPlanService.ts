import { prisma } from 'config/index'
import { IAccountPlan } from '../models'

export interface ICreateAccountPlanService {
  role: IAccountPlan
}

export interface IResponseCreateAccountPlanService extends IAccountPlan {
  name?: string
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

  if (!accountPlanSaved.name) {
    return {
      error: 'AccountPlan name invalid',
    }
  }

  const newAccountPlan = await prisma.accountPlan.create({
    data: {
      name: accountPlan.name,
      ...accountPlan,
    },
  })

  return newAccountPlan
}
