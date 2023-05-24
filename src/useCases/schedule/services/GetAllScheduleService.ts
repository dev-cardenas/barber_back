import { prisma } from 'config/index'
import { ISchedule } from '../models'

export const GetAllScheduleService = async (): Promise<ISchedule[]> => {
  const schedule = await prisma.schedule.findMany()

  return schedule
}
