import { z } from 'zod'
import {
  CreateCompanyService,
  ICreateCompanyService,
} from '../services/CreateCompanyService'

export const CreateCompanyController = async (req, reply) => {
  const { body } = req
  try {
    const companySchema = z.object({
      address: z.string().trim().optional(),
      company_name: z
        .string({ required_error: 'company_name is required' })
        .trim(),
      slug: z.string().trim().optional(),
      city: z.string().trim(),
      country: z.string().trim(),
      lat: z.string().trim().optional(),
      lng: z.string().trim().optional(),
      email: z
        .string({ required_error: 'company_name is required' })
        .trim()
        .email('Email invalid'),
      hours_available: z.number(),
      link_instagram: z.string().trim().optional(),
      link_twitter: z.string().trim().optional(),
      link_facebook: z.string().trim().optional(),
      payment_date: z.date().optional(),
      notice_of_payment: z.date().optional(),
      phone: z.string().trim().optional(),
      whatsapp: z.string().trim().optional(),
      account_recovery_email: z
        .string({ required_error: 'account_recovery_email is required' })
        .trim(),
      payment_status: z.boolean(),
      description: z.string().trim().optional(),
      account_plan_id: z.string().trim(),
    })

    const company = companySchema.parse(body)
    const result = await CreateCompanyService({
      company,
    } as ICreateCompanyService)

    if (result?.error) {
      reply.code(400).send(result)
    }

    return reply.code(200).send(result)
  } catch (err) {
    console.log('CreateCompanyController', err)
    return reply.code(500).send('An error ocurred')
  }
}
