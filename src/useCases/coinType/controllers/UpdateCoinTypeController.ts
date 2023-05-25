import { z } from 'zod'
import { UpdateCoinTypeService } from '../services/UpdateCoinTypeService'

export const UpdateCoinTypeController = async (req, reply) => {
  const { body } = req
  try {
    const coinTypeSchema = z.object({
      id_coin_type: z.string().trim(),
      name: z.string().trim(),
      symbol: z.string().trim(),
      is_delete: z.boolean(),
    })

    const coinType = coinTypeSchema.parse(body)
    const result = await UpdateCoinTypeService({ coinType })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('UpdateCoinTypeController', err)
    return reply.code(500).send('An error ocurred')
  }
}
