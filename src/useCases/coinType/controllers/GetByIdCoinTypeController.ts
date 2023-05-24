import { GetByIdCoinTypeService } from '../services/GetByIdCoinTypeService'

export const GetByIdCoinTypeController = async (req, reply) => {
  const { id_coin_type } = req.params
  try {
    const result = await GetByIdCoinTypeService({ id_coin_type })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetByIdCoinTypeController', err)
    return reply.code(500).send('An error ocurred')
  }
}
