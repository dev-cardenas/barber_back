import { prisma } from 'config/index'
import { ISchedule } from '../models'

interface IGetByIdScheduleService {
  id_schedule: string
}

export const GetByIdScheduleService = async ({
  id_schedule,
}: IGetByIdScheduleService): Promise<ISchedule> => {
  const schedule = await prisma.schedule.findUnique({
    where: {
      id_schedule,
    },
  })

  return schedule
}
