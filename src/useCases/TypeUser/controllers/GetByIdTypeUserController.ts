import { GetByIdTypeUserService } from '../services/GetByIdTypeUserService'

export const GetByIdTypeUserController = async (req, reply) => {
  const { id_type_user } = req.params
  try {
    const result = await GetByIdTypeUserService({ id_type_user })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetByIdTypeUserController', err)
    return reply.code(500).send('An error ocurred')
  }
}
