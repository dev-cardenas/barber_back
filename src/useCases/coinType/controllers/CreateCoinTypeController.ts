import { z } from 'zod'
import { CreateCoinTypeService } from '../services/CreateCoinTypeService'

export const CreateCoinTypeController = async (req, reply) => {
  const { body } = req
  try {
    const coinTypeSchema = z.object({
      name: z.string().trim(),
      description: z.string().trim(),
    })

    const coinType = coinTypeSchema.parse(body)
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
