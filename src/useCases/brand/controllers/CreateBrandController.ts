import { z } from 'zod'
import { CreateBrandService } from '../services/CreateBrandService'

export const CreateBrandController = async (req, reply) => {
  const { body } = req
  try {
    const brandSchema = z.object({
      name: z.string().trim(),
      logo: z.string().trim(),
    })

    const brand = brandSchema.parse(body)
    const result = await CreateBrandService({ brand })

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreateBrandController', err)
    return reply.code(500).send('An error ocurred')
  }
}
