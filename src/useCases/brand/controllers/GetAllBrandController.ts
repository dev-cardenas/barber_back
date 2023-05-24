import { GetAllBrandService } from '../services/GetAllBrandService'

export const GetAllBrandController = async (req, reply) => {
  try {
    const result = await GetAllBrandService()

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetAllBrandController', err)
    return reply.code(500).send('An error ocurred')
  }
}
