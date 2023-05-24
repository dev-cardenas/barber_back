import { prisma } from 'config/index'
import { IAccountPlan } from '../models'

export const GetAllAccountPlanService = async (): Promise<IAccountPlan[]> => {
  const accountPlan = await prisma.accountPlan.findMany()

  return accountPlan
}
