import { z } from 'zod'
import { UpdateTypeProcessAppointmentsService } from '../services/UpdateTypeProcessAppointmentsService'

export const UpdateTypeProcessAppointmentsController = async (req, reply) => {
  const { body } = req
  try {
    const typeProcessAppointmentsSchema = z.object({
      id_type_process_appointments: z.string().trim(),
      type: z.string().trim(),
    })

    const typeProcessAppointments = typeProcessAppointmentsSchema.parse(body)
    const result = await UpdateTypeProcessAppointmentsService({
      typeProcessAppointments,
    })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('UpdateTypeProcessAppointmentsController', err)
    return reply.code(500).send('An error ocurred')
  }
}
