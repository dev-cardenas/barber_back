import { prisma } from 'config/index'
import { ICoinType } from '../models'

export const GetAllCoinTypeService = async (): Promise<ICoinType[]> => {
  const CoinType = await prisma.coinType.findMany()

  return CoinType
}
