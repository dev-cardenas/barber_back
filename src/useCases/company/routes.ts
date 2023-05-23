import { FastifyInstance } from 'fastify'

import {
  CreateCompanyController,
  GetAllRoleController,
  GetByIdRoleController,
  UpdateRoleController,
  DeleteByIdRoleController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/company/create`, CreateCompanyController)
  app.get(`${api}/company/:id_user_role`, GetByIdRoleController)
  app.get(`${api}/company`, GetAllRoleController)
  app.put(`${api}/company/update`, UpdateRoleController)
  app.delete(`${api}/company/:id_user_role`, DeleteByIdRoleController)
}
