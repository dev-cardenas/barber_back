export interface ICoinType {
  id_coin_type?: string
  name: string
  symbol: string
  is_delete?: boolean
}

export interface ICoinTypeToUpdate {
  id_coin_type?: string
  name?: string
  symbol?: string
  is_delete?: boolean
}
