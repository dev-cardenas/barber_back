export interface ICompany {
  id_company?: string
  address?: string
  company_name: string
  description?: string
  slug?: string
  city: string
  country: string
  lat?: string
  lng?: string
  email: string
  hours_available: number
  link_instagram?: string
  link_twitter?: string
  link_facebook?: string
  payment_date?: Date
  notice_of_payment?: Date
  phone?: string
  whatsapp?: string
  account_recovery_email?: string
  is_delete?: boolean
}

export interface IAllOpcionalCompany {
  id_company?: string
  address?: string
  company_name?: string
  description?: string
  slug?: string
  city?: string
  country?: string
  lat?: string
  lng?: string
  email?: string
  hours_available?: number
  link_instagram?: string
  link_twitter?: string
  link_facebook?: string
  payment_date?: Date
  notice_of_payment?: Date
  phone?: string
  whatsapp?: string
  account_recovery_email?: string
  is_delete?: boolean
}
