import { GetAllAccountPlanService } from '../services/GetAllAccountPlanService'

export const GetAllAccountPlanController = async (req, reply) => {
  try {
    const result = await GetAllAccountPlanService()

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetAllAccountPlanController', err)
    return reply.code(500).send('An error ocurred')
  }
}
