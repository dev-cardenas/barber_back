import { GetByIdScheduleService } from '../services/GetByIdScheduleService'

export const GetByIdScheduleController = async (req, reply) => {
  const { id_schedule } = req.params
  try {
    const result = await GetByIdScheduleService({ id_schedule })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetByIdScheduleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
