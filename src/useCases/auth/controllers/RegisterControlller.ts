import { z } from 'zod'
import { FastifyInstance } from 'fastify'
import { RegisterService } from '../services/RegisterService'
import { enumUserType } from '../models/user'
import { passwordPattern } from '../utils'

export const RegisterController = async (req, reply, app: FastifyInstance) => {
  const { body } = req
  try {
    const userSchema = z
      .object({
        email: z.string().email({ message: 'Invalid email address' }).trim(),
        type_user: z.nativeEnum(enumUserType, {
          invalid_type_error: 'Invalid user type',
          required_error: 'Es obligatorio',
        }),
        password: z
          .string()
          .min(8, { message: 'Must be 8 or more characters long' })
          .regex(
            passwordPattern,
            'Password must contain at least one uppercase letter, one lowercase and one number',
          )
          .trim(),
        password_confirm: z
          .string()
          .min(8, { message: 'Must be 8 or more characters long' })
          .regex(
            passwordPattern,
            'Password confirm must contain at least one uppercase letter, one lowercase and one number',
          ),
      })
      .superRefine(({ password_confirm, password }, ctx) => {
        if (password_confirm !== password) {
          ctx.addIssue({
            code: 'custom',
            message: 'The passwords did not match',
          })
        }
      })

    const user = userSchema.parse(body)
    const result = await RegisterService({ user, app })

    if (result.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    if (err?.issues) {
      const errors = err.issues.map(({ message, code, path, received }) => ({
        message,
        code,
        path,
        received,
      }))

      return reply.code(400).send({ error: errors })
    }

    return reply.code(400).send({ error: err })
  }
}
