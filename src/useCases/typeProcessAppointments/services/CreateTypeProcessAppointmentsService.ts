import { prisma } from 'config/index'
import { ITypeProcessAppointments } from '../models'

export interface ICreateTypeProcessAppointmentsService {
  typeProcessAppointments: ITypeProcessAppointments
}

export interface IResponseCreateTypeProcessAppointmentsService
  extends ITypeProcessAppointments {
  id_type_process_appointments?: string
  error?: string
}

export const CreateTypeProcessAppointmentsService = async ({
  typeProcessAppointments,
}: ICreateTypeProcessAppointmentsService): Promise<IResponseCreateTypeProcessAppointmentsService> => {
  const typeProcessAppointmentsSaved =
    await prisma.typeProcessAppointments.findUnique({
      where: {
        type: typeProcessAppointments.type,
      },
    })

  if (!typeProcessAppointmentsSaved) {
    return {
      error: 'TypeProcessAppointments name invalid',
    }
  }

  if (!typeProcessAppointments.type) {
    return {
      error: 'TypeProcessAppointments name invalid',
    }
  }

  const newTypeProcessAppointments =
    await prisma.typeProcessAppointments.create({
      data: {
        type: typeProcessAppointments.type,

        ...typeProcessAppointments,
      },
    })

  return newTypeProcessAppointments
}
