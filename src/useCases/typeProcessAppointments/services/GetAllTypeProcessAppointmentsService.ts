import { prisma } from 'config/index'
import { ITypeProcessAppointments } from '../models'

export const GetAllTypeProcessAppointmentsService = async (): Promise<
  ITypeProcessAppointments[]
> => {
  const typeProcessAppointmentsService =
    await prisma.typeProcessAppointments.findMany()

  return typeProcessAppointmentsService
}
