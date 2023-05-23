import { DeleteByIdRoleService } from '../services/DeleteByIdRoleService'

export const DeleteByIdRoleController = async (req, reply) => {
  const { id_user_role } = req.params
  try {
    const result = await DeleteByIdRoleService({ id_user_role })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('DeleteByIdRoleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
