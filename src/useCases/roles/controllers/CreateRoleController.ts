import { z } from 'zod'
import { CreateRoleService } from '../services/CreateRoleService'

export const CreateRoleController = async (req, reply) => {
  const { body } = req
  try {
    const roleSchema = z.object({
      user_role: z.string().trim(),
      description: z.string().trim(),
    })

    const role = roleSchema.parse(body)
    const result = await CreateRoleService({ role })

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreateRoleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
