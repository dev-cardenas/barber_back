/* eslint-disable no-unused-vars */
export interface IUser {
  email?: string
  password?: string
}

export type typeUserType = 'client' | 'provider'
export enum enumUserType {
  client = 'client',
  provider = 'provider',
}

export interface IUserCreate extends IUser {
  type_user?: typeUserType
  password_confirm?: string
}

export interface IResponseLogin {
  token?: string
  error?: string
  user?: IUser & {
    type_user: typeUserType
  }
}
