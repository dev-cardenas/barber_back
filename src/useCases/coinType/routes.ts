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
  app.post(`${api}/CoinType/create`, CreateCoinTypeController)
  app.get(`${api}/CoinType/:id_coin_type`, GetByIdCoinTypeController)
  app.get(`${api}/CoinType`, GetAllCoinTypeController)
  app.put(`${api}/CoinType/update`, UpdateCoinTypeController)
  app.delete(`${api}/CoinType/:id_coin_type`, DeleteByIdCoinTypeController)
}
