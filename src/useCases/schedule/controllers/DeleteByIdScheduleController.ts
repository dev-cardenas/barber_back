import { DeleteByIdScheduleService } from '../services/DeleteByIdScheduleService'

export const DeleteByIdScheduleController = async (req, reply) => {
  const { id_schedule } = req.params
  try {
    const result = await DeleteByIdScheduleService({ id_schedule })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('DeleteByIdScheduleController', err)
    return reply.code(500).send('An error ocurred')
  }
}
