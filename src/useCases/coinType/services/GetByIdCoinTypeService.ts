import { prisma } from 'config/index'
import { ICoinType } from '../models'

interface IGetByIdCoinTypeService {
  id_coin_type: string
}

export const GetByIdCoinTypeService = async ({
  id_coin_type,
}: IGetByIdCoinTypeService): Promise<ICoinType> => {
  const coinType = await prisma.coinType.findUnique({
    where: {
      id_coin_type,
    },
  })

  return coinType
}
