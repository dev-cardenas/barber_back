import { z } from 'zod'
import { CreateTypeProcessAppointmentsService } from '../services/CreateTypeProcessAppointmentsService'

export const CreateTypeProcessAppointmentsController = async (req, reply) => {
  const { body } = req
  try {
    const typeProcessAppointmentsSchema = z.object({
      type: z.string().trim(),
    })

    const typeProcessAppointments = typeProcessAppointmentsSchema.parse(body)
    const result = await CreateTypeProcessAppointmentsService({ typeProcessAppointments })

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreateTypeProcessAppointmentsController', err)
    return reply.code(500).send('An error ocurred')
  }
}
