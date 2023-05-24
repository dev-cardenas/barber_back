import { prisma } from 'config/index'
import { ICoinType } from '../models'
import { ICreateRoleService } from './CreateRoleService'

export const UpdateCoinTypeService = async ({
  coinType,
}: ICreateRoleService): Promise<ICoinType> => {
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
