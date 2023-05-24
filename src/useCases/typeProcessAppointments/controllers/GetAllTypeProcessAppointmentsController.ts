import { GetAllTypeProcessAppointmentsService } from '../services/GetAllTypeProcessAppointmentsService'

export const GetAllTypeProcessAppointmentsController = async (req, reply) => {
  try {
    const result = await GetAllTypeProcessAppointmentsService()

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetAllTypeProcessAppointmentsController', err)
    return reply.code(500).send('An error ocurred')
  }
}
