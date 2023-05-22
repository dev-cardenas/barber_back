import { z } from 'zod'
import { FastifyInstance } from 'fastify'
import { LoginService } from '../services/LoginService'
import { passwordPattern } from '../utils'

export const LoginController = async (req, reply, app: FastifyInstance) => {
  const { body } = req

  try {
    const userSchema = z.object({
      email: z.string().email({ message: 'Invalid email address' }).trim(),
      password: z
        .string()
        .min(8, { message: 'Must be 8 or more characters long' })
        .regex(
          passwordPattern,
          'Password must contain at least one uppercase letter, one lowercase and one number',
        )
        .trim(),
    })

    const user = userSchema.parse(body)
    const result = await LoginService({ user, app })

    if (result.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('Im here', err)
    return reply.code(500).send('An error ocurred')
  }
}
