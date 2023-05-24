import { prisma } from 'config/index'
import { ITypeProcessAppointments } from '../models'
import { ICreateTypeProcessAppointmentsService } from './CreateTypeProcessAppointmentsService'

export const UpdateTypeProcessAppointmentsService = async ({
  typeProcessAppointments,
}: ICreateTypeProcessAppointmentsService): Promise<ITypeProcessAppointments> => {
  const { id_type_process_appointments } = typeProcessAppointments
  delete typeProcessAppointments.id_type_process_appointments

  const typeProcessAppointmentsUpdated = await prisma.typeProcessAppointments.update({
    where: {
      id_type_process_appointments,
    },
    data: typeProcessAppointments,
  })

  return typeProcessAppointmentsUpdated
}

