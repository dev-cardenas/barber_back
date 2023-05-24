import { GetAllCoinTypeService } from '../services/GetAllCoinTypeService'

export const GetAllCoinTypeController = async (req, reply) => {
  try {
    const result = await GetAllCoinTypeService()

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetAllCoinTypeController', err)
    return reply.code(500).send('An error ocurred')
  }
}
