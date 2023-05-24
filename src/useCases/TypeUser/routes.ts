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
  app.post(`${api}/TypeUser/create`, CreateTypeUserController)
  app.get(`${api}/TypeUser/:id_user_role`, GetByIdTypeUserController)
  app.get(`${api}/TypeUser`, GetAllTypeUserController)
  app.put(`${api}/TypeUser/update`, UpdateTypeUserController)
  app.delete(`${api}/TypeUser/:id_user_role`, DeleteByIdTypeUserController)
}
