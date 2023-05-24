import { FastifyInstance } from 'fastify'

import {
  CreateTypeProcessAppointmentsController,
  GetAllTypeProcessAppointmentsController,
  GetByIdTypeProcessAppointmentsController,
  UpdateTypeProcessAppointmentsController,
  DeleteByIdTypeProcessAppointmentsController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/typeProcessAppointments/create`, CreateTypeProcessAppointmentsController)
  app.get(`${api}/typeProcessAppointments/:id_type_process_appointments`, GetByIdTypeProcessAppointmentsController)
  app.get(`${api}/typeProcessAppointments`, GetAllTypeProcessAppointmentsController)
  app.put(`${api}/typeProcessAppointments/update`, UpdateTypeProcessAppointmentsController)
  app.delete(`${api}/typeProcessAppointments/:id_type_process_appointments`, DeleteByIdTypeProcessAppointmentsController)
}
