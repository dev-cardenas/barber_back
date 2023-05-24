import { z } from 'zod'
import { CreateScheduleService } from '../services/CreateScheduleService'

export const CreateScheduleController = async (req, reply) => {
  const { body } = req
  try {
    const scheduleSchema = z.object({
      monday: z.string().trim(),
      tuesday: z.string().trim(),
      wednesday: z.string().trim(),
      thursday: z.string().trim(),
      friday: z.string().trim(),
      saturday: z.string().trim(),
      sunday: z.string().trim(),
    })

    const schedule = scheduleSchema.parse(body)
    const result = await CreateScheduleService({ schedule })

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreateScheduleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
