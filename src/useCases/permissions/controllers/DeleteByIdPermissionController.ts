import { DeleteByIdPermissionService } from '../services/DeleteByIdPermissionService'

export const DeleteByIdPermissionController = async (req, reply) => {
  const { id_user_permission } = req.params
  try {
    const result = await DeleteByIdPermissionService({ id_user_permission })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('DeleteByIdPermissionController', err)
    return reply.code(500).send('An error ocurred')
  }
}
