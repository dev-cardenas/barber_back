import { FastifyInstance } from 'fastify'

import {
  CreateRoleController,
  GetAllRoleController,
  GetByIdRoleController,
  UpdateRoleController,
  DeleteByIdRoleController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/role/create`, CreateRoleController)
  app.get(`${api}/role/:id_user_role`, GetByIdRoleController)
  app.get(`${api}/role`, GetAllRoleController)
  app.put(`${api}/role/update`, UpdateRoleController)
  app.delete(`${api}/role/:id_user_role`, DeleteByIdRoleController)
}
