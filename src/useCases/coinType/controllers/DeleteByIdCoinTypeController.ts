import { DeleteByIdCoinTypeService } from '../services/DeleteByIdCoinTypeService'

export const DeleteByIdCoinTypeController = async (req, reply) => {
  const { id_coin_type } = req.params
  try {
    const result = await DeleteByIdCoinTypeService({ id_coin_type })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('DeleteByIdCoinTypeController', err)
    return reply.code(500).send('An error ocurred')
  }
}
