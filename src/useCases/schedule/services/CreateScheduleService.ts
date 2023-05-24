import { prisma } from 'config/index'
import { ISchedule } from '../models'

export interface ICreateScheduleService {
  schedule: ISchedule
}

export interface IResponseCreateScheduleService extends ISchedule {
  id_schedule?: string
  error?: string
}

export const CreateScheduleService = async ({
  schedule,
}: ICreateScheduleService): Promise<IResponseCreateScheduleService> => {
  const scheduleSaved = await prisma.schedule.findUnique({
    where: {
      id_schedule: schedule.id_schedule,
    },
  })

  if (!scheduleSaved) {
    return {
      error: 'Schedule name invalid',
    }
  }

  if (!schedule.id_schedule) {
    return {
      error: 'Schedule name invalid',
    }
  }

  const newSchedule = await prisma.userSchedule.create({
    data: {
      id_schedule: schedule.id_schedule,
      ...schedule,
    },
  })

  return newSchedule
}
