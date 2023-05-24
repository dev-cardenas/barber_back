import { DeleteByIdTypeUserService } from '../services/DeleteByIdTypeUserService'

export const DeleteByIdTypeUserController = async (req, reply) => {
  const { id_type_user } = req.params
  try {
    const result = await DeleteByIdTypeUserService({ id_type_user })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('DeleteByIdTypeUserController', err)
    return reply.code(500).send('An error ocurred')
  }
}
