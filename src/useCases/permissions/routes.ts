import { FastifyInstance } from 'fastify'

import {
  CreatePermissionController,
  GetAllPermissionController,
  GetByIdPermissionController,
  UpdatePermissionController,
  DeleteByIdPermissionController,
} from './controllers'

export const api = '/api/v1'

export async function rolesRoutes(app: FastifyInstance) {
  app.post(`${api}/permission/create`, CreatePermissionController)
  app.get(`${api}/permission/:id_user_permission`, GetByIdPermissionController)
  app.get(`${api}/permission`, GetAllPermissionController)
  app.put(`${api}/permission/update`, UpdatePermissionController)
  app.delete(
    `${api}/permission/:id_user_permission`,
    DeleteByIdPermissionController,
  )
}
