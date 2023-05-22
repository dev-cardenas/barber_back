import fastify from 'fastify'
import cors from '@fastify/cors'
import jwtFastify from '@fastify/jwt'

import { authRoutes } from './useCases/auth/routes'

const fastifyConfig = {
  trustProxy: true,
  logger: {
    useLevelLabels: true,
    level: 'warn',
  },
}

const app = fastify(fastifyConfig)

app.register(jwtFastify, {
  secret: process.env.SECRET_JWT ?? 'supersecret',
})

app.register(authRoutes)

app.register(cors, {
  origin: true, // All urls
})

export { app }
