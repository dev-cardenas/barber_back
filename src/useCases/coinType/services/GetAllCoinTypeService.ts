import { prisma } from 'config/index'
import { ICoinType } from '../models'

export const GetAllCoinTypeService = async (): Promise<ICoinType[]> => {
  const CoinType = await prisma.CoinType.findMany()

  return CoinType
}
