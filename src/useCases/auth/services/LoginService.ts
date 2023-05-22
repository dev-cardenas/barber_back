import { FastifyInstance } from 'fastify'
import { passwordCompare } from '../utils'

import { prisma } from 'config/index'
import { IUser } from '../models/user'

interface ILoginController {
  user: IUser
  app: FastifyInstance
}

export const LoginService = async ({ user, app }: ILoginController) => {
  const { email, password } = user

  const userSaved = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
    include: {
      roles: true,
      type_user: true,
    },
  })

  if (!userSaved) {
    return {
      error: 'User or password not valid',
    }
  }

  const passwordMatch = await passwordCompare(password, userSaved.password_hash)

  if (!passwordMatch) {
    return {
      error: 'User or password not valid',
    }
  }

  const token = app.jwt.sign({
    payload: {
      email,
      sub: userSaved.id_user,
    },
  })

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      token,
    },
  })

  return {
    token,
    user: {
      email: userSaved.email,
      type_user: userSaved.type_user.type,
    },
  }
}
