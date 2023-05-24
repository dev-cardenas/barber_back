import { prisma } from 'config/index'
import { ICoinType } from '../models'

export interface ICreateCoinTypeService {
  coinType: ICoinType
}

export interface IResponseCreateCoinTypeService extends ICoinType {
  id_coin_type?: string
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

  if (!coinType.name) {
    return {
      error: 'CoinType name invalid',
    }
  }

  const newCoinType = await prisma.coinType.create({
    data: {
      name: coinType.name,
      ...coinType,
    },
  })

  return newCoinType
}
