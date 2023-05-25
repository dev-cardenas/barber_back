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
  app.post(`${api}/brand/create`, CreateBrandController)
  app.get(`${api}/brand/:id_brand`, GetByIdBrandController)
  app.get(`${api}/brand`, GetAllBrandController)
  app.put(`${api}/brand/update`, UpdateBrandController)
  app.delete(`${api}/brand/:id_brand`, DeleteByIdBrandController)
}
