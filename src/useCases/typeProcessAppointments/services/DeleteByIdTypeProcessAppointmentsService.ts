import { prisma } from 'config/index'
import { ITypeProcessAppointments } from '../models'

interface IDeleteByIdTypeProcessAppointmentsService {
  id_type_process_appointments: string
}

export const DeleteByIdTypeProcessAppointmentsService = async ({
  id_type_process_appointments,
}: IDeleteByIdTypeProcessAppointmentsService): Promise<ITypeProcessAppointments> => {
  const typeProcessAppointmentsUpdated =
    await prisma.typeProcessAppointments.update({
      where: {
        id_type_process_appointments,
      },
      data: {
        is_delete: true,
      },
    })

  return typeProcessAppointmentsUpdated
}
