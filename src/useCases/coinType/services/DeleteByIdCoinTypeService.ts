import { prisma } from 'config/index'
import { ICoinType } from '../models'

interface IDeleteByIdCoinTypeService {
  id_user_role: string
}

export const DeleteByIdCoinTypeService = async ({
  id_user_role,
}: IDeleteByIdCoinTypeService): Promise<ICoinType> => {
  const coinTypeUpdated = await prisma.coinType.update({
    where: {
      id_user_role,
    },
    data: {
      is_delete: true,
    },
  })

  return coinTypeUpdated
}
