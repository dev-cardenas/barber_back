import { prisma } from 'config/index'
import { ICoinTypeToUpdate, ICoinType } from '../models'

interface IUpdateCoinTypeService {
  coinType: ICoinTypeToUpdate
}

export const UpdateCoinTypeService = async ({
  coinType,
}: IUpdateCoinTypeService): Promise<ICoinType> => {
  const { id_coin_type } = coinType
  delete coinType.id_coin_type

  const coinTypeUpdated = await prisma.coinType.update({
    where: {
      id_coin_type,
    },
    data: coinType,
  })

  return coinTypeUpdated
}
