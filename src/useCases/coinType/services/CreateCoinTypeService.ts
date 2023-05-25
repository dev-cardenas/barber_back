import { prisma } from 'config/index'
import { ICoinType } from '../models'

export interface ICreateCoinTypeService {
  coinType: ICoinType
}

export interface IResponseCreateCoinTypeService {
  coin?: ICoinType
  error?: string
}

export const CreateCoinTypeService = async ({
  coinType,
}: ICreateCoinTypeService): Promise<IResponseCreateCoinTypeService> => {
  const coinTypeSaved = await prisma.coinType.findUnique({
    where: {
      name: coinType.name,
    },
  })

  if (!coinTypeSaved) {
    return {
      error: 'CoinType name invalid',
    }
  }

  const newCoinType = await prisma.coinType.create({
    data: coinType,
  })

  return { coin: newCoinType }
}
