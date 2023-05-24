import { GetByIdCompanyService } from '../services/GetByIdCompanyService'

export const GetByIdCompanyController = async (req, reply) => {
  const { id_company } = req.params
  try {
    const result = await GetByIdCompanyService({ id_company })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetByIdCompanyController', err)
    return reply.code(500).send('An error ocurred')
  }
}
