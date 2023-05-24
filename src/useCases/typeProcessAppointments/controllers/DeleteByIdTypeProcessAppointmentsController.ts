import { DeleteByIdTypeProcessAppointmentsService } from '../services/DeleteByIdTypeProcessAppointmentsService'

export const DeleteByIdTypeProcessAppointmentsController = async (req, reply) => {
  const { id_type_process_appointments } = req.params
  try {
    const result = await DeleteByIdTypeProcessAppointmentsService({ id_type_process_appointments })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('DeleteByIdTypeProcessAppointmentsController', err)
    return reply.code(500).send('An error ocurred')
  }
}
