import { GetAllPermissionService } from '../services/GetAllPermissionService'

export const GetAllPermissionController = async (req, reply) => {
  try {
    const result = await GetAllPermissionService()

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetAllPermissionController', err)
    return reply.code(500).send('An error ocurred')
  }
}
