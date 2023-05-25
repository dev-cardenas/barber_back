import { FastifyInstance } from 'fastify'

import {
  CreateCoinTypeController,
  GetAllCoinTypeController,
  GetByIdCoinTypeController,
  UpdateCoinTypeController,
  DeleteByIdCoinTypeController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/coinType/create`, CreateCoinTypeController)
  app.get(`${api}/coinType/:id_coin_type`, GetByIdCoinTypeController)
  app.get(`${api}/coinType`, GetAllCoinTypeController)
  app.put(`${api}/coinType/update`, UpdateCoinTypeController)
  app.delete(`${api}/coinType/:id_coin_type`, DeleteByIdCoinTypeController)
}
