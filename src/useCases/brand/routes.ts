import { FastifyInstance } from 'fastify'

import {
  CreateBrandController,
  GetAllBrandController,
  GetByIdBrandController,
  UpdateBrandController,
  DeleteByIdBrandController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/role/create`, CreateBrandController)
  app.get(`${api}/role/:id_user_role`, GetByIdBrandController)
  app.get(`${api}/role`, GetAllBrandController)
  app.put(`${api}/role/update`, UpdateBrandController)
  app.delete(`${api}/role/:id_user_role`, DeleteByIdBrandController)
}
