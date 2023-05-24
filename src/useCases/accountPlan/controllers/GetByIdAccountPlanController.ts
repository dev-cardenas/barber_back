import { GetByIdAccountPlanService } from '../services/GetByIdAccountPlanService'

export const GetByIdAccountPlanController = async (req, reply) => {
  const { id_account_plan } = req.params
  try {
    const result = await GetByIdAccountPlanService({ id_account_plan })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetByIdAccountPlanController', err)
    return reply.code(500).send('An error ocurred')
  }
}
