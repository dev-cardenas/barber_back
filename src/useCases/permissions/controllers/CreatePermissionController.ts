import { z } from 'zod'
import { CreatePermissionService } from '../services/CreatePermissionService'

export const CreatePermissionController = async (req, reply) => {
  const { body } = req
  try {
    const permissionSchema = z.object({
      user_permission: z.string().trim(),
      description: z.string().trim(),
    })

    const permission = permissionSchema.parse(body)
    const result = await CreatePermissionService({ permission })

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreatePermissionController', err)
    return reply.code(500).send('An error ocurred')
  }
}
