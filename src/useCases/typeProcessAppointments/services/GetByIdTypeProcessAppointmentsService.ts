import { prisma } from 'config/index'
import { ITypeProcessAppointments } from '../models'

interface IGetByIdTypeProcessAppointmentsService {
  id_type_process_appointments: string
}

export const GetByIdTypeProcessAppointmentsService = async ({
  id_type_process_appointments,
}: IGetByIdTypeProcessAppointmentsService): Promise<ITypeProcessAppointments> => {
  const typeProcessAppointments = await prisma.typeProcessAppointments.findUnique({
    where: {
      id_type_process_appointments,
    },
  })

  return typeProcessAppointments
}
