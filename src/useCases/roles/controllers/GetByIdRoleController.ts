import { GetByIdRoleService } from '../services/GetByIdRoleService'

export const GetByIdRoleController = async (req, reply) => {
  const { id_user_role } = req.params
  try {
    const result = await GetByIdRoleService({ id_user_role })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetByIdRoleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
