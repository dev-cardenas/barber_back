import { z } from 'zod'
import { UpdateRoleService } from '../services/UpdateRoleService'

export const UpdateRoleController = async (req, reply) => {
  const { body } = req
  try {
    const roleSchema = z.object({
      user_role: z.string().trim(),
      id_user_role: z.string().trim(),
      description: z.string().trim(),
    })

    const role = roleSchema.parse(body)
    const result = await UpdateRoleService({ role })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('UpdateRoleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
