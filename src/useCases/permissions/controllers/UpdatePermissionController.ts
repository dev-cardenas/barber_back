import { z } from 'zod'
import { UpdatePermissionService } from '../services/UpdatePermissionService'

export const UpdatePermissionController = async (req, reply) => {
  const { body } = req
  try {
    const permissionSchema = z.object({
      user_permission: z.string().trim(),
      id_user_permission: z.string().trim(),
      description: z.string().trim(),
    })

    const permission = permissionSchema.parse(body)
    const result = await UpdatePermissionService({ permission })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('UpdatePermissionController', err)
    return reply.code(500).send('An error ocurred')
  }
}
