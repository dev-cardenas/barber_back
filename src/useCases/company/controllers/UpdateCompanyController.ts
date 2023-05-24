import { z } from 'zod'
import { UpdateCompanyService } from '../services/UpdateCompanyService'

export const UpdateCompanyController = async (req, reply) => {
  const { body } = req
  try {
    const companySchema = z.object({
      id_company: z.string().trim(),
      address: z.string().trim().optional(),
      company_name: z.string().trim().optional(),
      slug: z.string().trim().optional(),
      city: z.string().trim().optional(),
      country: z.string().trim().optional(),
      lat: z.string().trim().optional(),
      lng: z.string().trim().optional(),
      email: z.string().trim().email().optional(),
      hours_available: z.number().optional(),
      link_instagram: z.string().trim().optional(),
      link_twitter: z.string().trim().optional(),
      link_facebook: z.string().trim().optional(),
      payment_date: z.date().optional(),
      notice_of_payment: z.date().optional(),
      phone: z.string().trim().optional(),
      whatsapp: z.string().trim().optional(),
      account_recovery_email: z.string().trim().optional(),
      payment_status: z.boolean(),
      description: z.string().trim().optional(),
    })

    const company = companySchema.parse(body)
    const result = await UpdateCompanyService({ company })

    return reply.code(200).send(result)
  } catch (err) {
    console.log('UpdateCompanyController', err)
    return reply.code(500).send('An error ocurred')
  }
}
