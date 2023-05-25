import { z } from 'zod'
import { CreateAccountPlanService } from '../services/CreateAccountPlanService'
import { IAccountPlan } from '../models'

export const CreateAccountPlanController = async (req, reply) => {
  const { body } = req
  try {
    const accountPlanSchema = z.object({
      description: z.string().trim(),
      name: z.string().trim(),
      code: z.string().trim(),
      price: z.number(),
      available_days: z.number(),
    })

    const accountPlan = accountPlanSchema.parse(body) as IAccountPlan
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
