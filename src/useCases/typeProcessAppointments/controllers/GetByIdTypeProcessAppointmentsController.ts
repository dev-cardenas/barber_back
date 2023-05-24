import { GetByIdTypeProcessAppointmentsService } from '../services/GetByIdTypeProcessAppointmentsService'

export const GetByIdTypeProcessAppointmentsController = async (req, reply) => {
  const { id_type_process_appointments } = req.params
  try {
    const result = await GetByIdTypeProcessAppointmentsService({ id_type_process_appointments })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetByIdTypeProcessAppointmentsController', err)
    return reply.code(500).send('An error ocurred')
  }
}
