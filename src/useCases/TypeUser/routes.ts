import { FastifyInstance } from 'fastify'

import {
  CreateTypeUserController,
  GetAllTypeUserController,
  GetByIdTypeUserController,
  UpdateTypeUserController,
  DeleteByIdTypeUserController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/typeUser/create`, CreateTypeUserController)
  app.get(`${api}/typeUser/:id_user_role`, GetByIdTypeUserController)
  app.get(`${api}/typeUser`, GetAllTypeUserController)
  app.put(`${api}/typeUser/update`, UpdateTypeUserController)
  app.delete(`${api}/typeUser/:id_user_role`, DeleteByIdTypeUserController)
}
