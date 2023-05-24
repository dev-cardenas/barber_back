import { z } from 'zod'
import { CreateTypeUserService } from '../services/CreateTypeUserService'

export const CreateTypeUserController = async (req, reply) => {
  const { body } = req
  try {
    const typeUserSchema = z.object({
      type: z.string().trim(),
      description: z.string().trim(),
    })

    const typeUser = typeUserSchema.parse(body)
    const result = await CreateTypeUserService({ typeUser })

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreateTypeUserController', err)
    return reply.code(500).send('An error ocurred')
  }
}
