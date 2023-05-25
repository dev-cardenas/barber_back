export interface IAccountPlan {
  id_account_plan?: string
  description: string
  name: string
  code: string
  price: number
  available_days: number
  is_delete?: boolean
}

export interface IAccountPlanToUpdate {
  id_account_plan: string
  description?: string
  name?: string
  code?: string
  price?: number
  available_days?: number
  is_delete?: boolean
}
