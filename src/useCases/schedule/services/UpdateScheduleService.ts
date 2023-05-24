import { prisma } from 'config/index'
import { ISchedule } from '../models'
import { ICreateScheduleService } from './CreateScheduleService'

export const UpdateScheduleService = async ({
  schedule,
}: ICreateScheduleService): Promise<ISchedule> => {
  const { id_schedule } = schedule
  delete schedule.id_schedule

  const scheduleUpdated = await prisma.schedule.update({
    where: {
      id_schedule,
    },
    data: schedule,
  })

  return scheduleUpdated
}
