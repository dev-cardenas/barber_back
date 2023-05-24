import { GetByIdBrandService } from '../services/GetByIdBrandService'

export const GetByIdBrandController = async (req, reply) => {
  const { id_brand } = req.params
  try {
    const result = await GetByIdBrandService({ id_brand })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetByIdRoleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
