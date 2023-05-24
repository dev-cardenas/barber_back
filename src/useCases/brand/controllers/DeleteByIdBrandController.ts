import { DeleteByIdRoleService } from '../services/DeleteByIdRoleService'

export const DeleteByIdBrandController = async (req, reply) => {
  const { id_brand } = req.params
  try {
    const result = await DeleteByIdRoleService({ id_brand })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('DeleteByIdBrandController', err)
    return reply.code(500).send('An error ocurred')
  }
}
