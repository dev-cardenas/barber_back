import { DeleteByIdCompanyService } from '../services/DeleteByIdCompanyService'

export const DeleteByIdCompanyController = async (req, reply) => {
  const { id_company } = req.params
  try {
    const result = await DeleteByIdCompanyService({ id_company })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('DeleteByIdCompanyController', err)
    return reply.code(500).send('An error ocurred')
  }
}
