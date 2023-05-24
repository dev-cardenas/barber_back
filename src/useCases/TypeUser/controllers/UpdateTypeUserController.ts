import { z } from 'zod'
import { UpdateTypeUserService } from '../services/UpdateTypeUserService'

export const UpdateTypeUserController = async (req, reply) => {
  const { body } = req
  try {
    const typeUserSchema = z.object({
      id_type_user: z.string().trim(),
      type: z.string().trim(),
      description: z.string().trim(),
    })

    const typeUser = typeUserSchema.parse(body)
    const result = await UpdateTypeUserService({ typeUser })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('UpdateTypeUserController', err)
    return reply.code(500).send('An error ocurred')
  }
}
