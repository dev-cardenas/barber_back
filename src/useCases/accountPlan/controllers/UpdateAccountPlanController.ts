import { z } from 'zod'
import { UpdateAccountPlanService } from '../services/UpdateAccountPlanService'

export const UpdateAccountPlanController = async (req, reply) => {
  const { body } = req
  try {
    const accountPlanSchema = z.object({
      id_account_plan: z.string().trim(),
      code: z.string().trim(),
      name: z.string().trim(),
      slug: z.string().trim(),
      description: z.string().trim(),
      price: z.number(),
      available_days: z.number(),
      is_delete: z.boolean(),
    })

    const accountPlan = accountPlanSchema.parse(body)
    const result = await UpdateAccountPlanService({ accountPlan })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('UpdateAccountPlanController', err)
    return reply.code(500).send('An error ocurred')
  }
}
