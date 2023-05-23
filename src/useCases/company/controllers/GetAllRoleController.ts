import { GetAllRoleService } from '../services/GetAllRoleService'

export const GetAllRoleController = async (req, reply) => {
  try {
    const result = await GetAllRoleService()

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetAllRoleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
