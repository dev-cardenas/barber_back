import { z } from 'zod'
import { ITypeUser } from '../models'
import { CreateTypeUserService } from '../services/CreateTypeUserService'

export const CreateTypeUserController = async (req, reply) => {
  const { body } = req
  try {
    const typeUserSchema = z.object({
      type: z.string({ required_error: 'type is required' }).trim(),
      description: z.string().trim(),
    })

    const typeUser = typeUserSchema.parse(body) as ITypeUser
    const result = await CreateTypeUserService({
      typeUser,
    })

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreateTypeUserController', err)
    return reply.code(500).send('An error ocurred')
  }
}
