import { GetAllScheduleService } from '../services/GetAllScheduleService'

export const GetAllScheduleController = async (req, reply) => {
  try {
    const result = await GetAllScheduleService()

    return reply.code(200).send(result)
  } catch (err) {
    console.log('GetAllScheduleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
