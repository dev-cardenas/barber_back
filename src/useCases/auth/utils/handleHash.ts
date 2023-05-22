import { hashSync, compareSync } from 'bcrypt'

export const passwordHash = (password: string) => hashSync(password, 10)
export const passwordCompare = (password: string, password_hash: string) =>
  compareSync(password, password_hash)
