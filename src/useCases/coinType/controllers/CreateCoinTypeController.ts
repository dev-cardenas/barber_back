import { z } from 'zod'
import { CreateCoinTypeService } from '../services/CreateCoinTypeService'
import { ICoinType } from '../models'

export const CreateCoinTypeController = async (req, reply) => {
  const { body } = req
  try {
    const coinTypeSchema = z.object({
      name: z.string().trim(),
      symbol: z.string().trim(),
    })

    const coinType = coinTypeSchema.parse(body) as ICoinType
    const result = await CreateCoinTypeService({ coinType })

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreateCoinTypeController', err)
    return reply.code(500).send('An error ocurred')
  }
}
