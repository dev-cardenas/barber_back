import { prisma } from 'config/index'
import { ICoinType } from '../models'

interface IDeleteByIdCoinTypeService {
  id_coin_type: string
}

export const DeleteByIdCoinTypeService = async ({
  id_coin_type,
}: IDeleteByIdCoinTypeService): Promise<ICoinType> => {
  const coinTypeUpdated = await prisma.coinType.update({
    where: {
      id_coin_type,
    },
    data: {
      is_delete: true,
    },
  })

  return coinTypeUpdated
}
