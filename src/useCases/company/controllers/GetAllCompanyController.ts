import { GetAllCompanyService } from '../services/GetAllCompanyService'

export const GetAllCompanyController = async (req, reply) => {
  try {
    const result = await GetAllCompanyService()

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetAllCompanyController', err)
    return reply.code(500).send('An error ocurred')
  }
}
