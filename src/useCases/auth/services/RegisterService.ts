import { FastifyInstance } from 'fastify'
import { passwordHash } from '../utils'
import { prisma } from 'config/index'
import { IUserCreate } from '../models/user'

interface IRegisterService {
  user: IUserCreate
  app: FastifyInstance
}

export const RegisterService = async ({ user, app }: IRegisterService) => {
  const { email, password, type_user } = user

  const userSaved = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userSaved) {
    return {
      error: 'Invalid data',
    }
  }

  const typeUserSaved = await prisma.typeUser.findUnique({
    where: {
      type: type_user,
    },
  })

  if (!typeUserSaved) {
    return {
      error: 'Invalid data',
    }
  }

  const password_hash = passwordHash(password)

  const newUser = await prisma.user.create({
    data: {
      email,
      password_hash,
      type_user_id: typeUserSaved.id_type_user,
    },
  })

  const token = app.jwt.sign({
    payload: {
      email,
      sub: newUser.id_user,
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
      email,
      type_user: typeUserSaved.type,
    },
  }
}
