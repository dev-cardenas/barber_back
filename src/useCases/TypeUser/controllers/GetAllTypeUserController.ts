import { GetAllTypeUserService } from '../services/GetAllTypeUserService'

export const GetAllTypeUserController = async (req, reply) => {
  try {
    const result = await GetAllTypeUserService()

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetAllTypeUserController', err)
    return reply.code(500).send('An error ocurred')
  }
}
