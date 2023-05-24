import { z } from 'zod'
import { CreateAccountPlanService } from '../services/CreateAccountPlanService'

export const CreateAccountPlanController = async (req, reply) => {
  const { body } = req
  try {
    const accountPlanSchema = z.object({
      id_account_plan: z.string().trim(),
      description: z.string().trim(),
    })

    const accountPlan = accountPlanSchema.parse(body)
    const result = await CreateAccountPlanService({ accountPlan })

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreateAccountPlanController', err)
    return reply.code(500).send('An error ocurred')
  }
}
