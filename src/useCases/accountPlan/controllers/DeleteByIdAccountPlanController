import { DeleteByIdAccountPlanService } from '../services/DeleteByIdAccountPlanService'

export const DeleteByIdAccountPlanController = async (req, reply) => {
  const { id_account_plan } = req.params
  try {
    const result = await DeleteByIdAccountPlanService({ id_account_plan })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('DeleteByIdAccountPlanController', err)
    return reply.code(500).send('An error ocurred')
  }
}
