import { z } from 'zod'
import { UpdateBrandService } from '../services/UpdateBrandService'

export const UpdateBrandController = async (req, reply) => {
  const { body } = req
  try {
    const brandSchema = z.object({
      id_brand: z.string().trim(),
      name: z.string().trim(),
    })

    const brand = brandSchema.parse(body)
    const result = await UpdateBrandService({ brand })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('UpdateRoleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
