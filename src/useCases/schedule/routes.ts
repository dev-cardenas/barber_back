import { FastifyInstance } from 'fastify'

import {
  CreateScheduleController,
  GetAllScheduleController,
  GetByIdScheduleController,
  UpdateScheduleController,
  DeleteByIdScheduleController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/schedule/create`, CreateScheduleController)
  app.get(`${api}/schedule/:id_schedule`, GetByIdScheduleController)
  app.get(`${api}/schedule`, GetAllScheduleController)
  app.put(`${api}/schedule/update`, UpdateScheduleController)
  app.delete(`${api}/schedule/:id_schedule`, DeleteByIdScheduleController)
}
