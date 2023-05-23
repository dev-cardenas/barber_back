import { GetByIdPermissionService } from '../services/GetByIdPermissionService'

export const GetByIdPermissionController = async (req, reply) => {
  const { id_user_permission } = req.params
  try {
    const result = await GetByIdPermissionService({ id_user_permission })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetByIdPermissionController', err)
    return reply.code(500).send('An error ocurred')
  }
}
