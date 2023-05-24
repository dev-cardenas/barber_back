import { z } from 'zod'
import { UpdateScheduleService } from '../services/UpdateScheduleService'

export const UpdateScheduleController = async (req, reply) => {
  const { body } = req
  try {
    const scheduleSchema = z.object({
      id_schedule: z.string().trim(),
    })

    const schedule = scheduleSchema.parse(body)
    const result = await UpdateScheduleService({ schedule })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('UpdateScheduleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
