import { FastifyInstance } from 'fastify'
import { LoginController } from './controllers/LoginController'
import { RegisterController } from './controllers/RegisterControlller'

import { IUser, IUserCreate, IResponseLogin } from './models/user'

export async function authRoutes(app: FastifyInstance) {
  app.post<{ Body: IUser; Reply: IResponseLogin }>(
    '/api/v1/auth/login',
    async (req, reply) => await LoginController(req, reply, app),
  )
  app.post<{ Body: IUserCreate; Reply: IResponseLogin }>(
    '/api/v1/auth/register',
    async (req, reply) => await RegisterController(req, reply, app),
  )
}
