import { FastifyInstance } from 'fastify'

import {
  CreateCompanyController,
  GetAllCompanyController,
  GetByIdCompanyController,
  UpdateCompanyController,
  DeleteByIdCompanyController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/company/create`, CreateCompanyController)
  app.get(`${api}/company/:id_company`, GetByIdCompanyController)
  app.get(`${api}/company`, GetAllCompanyController)
  app.put(`${api}/company/update`, UpdateCompanyController)
  app.delete(`${api}/company/:id_company`, DeleteByIdCompanyController)
}
