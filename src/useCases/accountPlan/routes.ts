import { FastifyInstance } from 'fastify'

import {
  CreateAccountPlanController,
  GetAllAccountPlanController,
  GetByIdAccountPlanController,
  UpdateAccountPlanController,
  DeleteByIdAccountPlanController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/accountPlan/create`, CreateAccountPlanController)
  app.get(`${api}/accountPlan/:id_user_role`, GetByIdAccountPlanController)
  app.get(`${api}/accountPlan`, GetAllAccountPlanController)
  app.put(`${api}/accountPlan/update`, UpdateAccountPlanController)
  app.delete(`${api}/accountPlan/:id_user_role`, DeleteByIdAccountPlanController)
}
