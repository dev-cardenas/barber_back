import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('provider')
class Provider {
  @PrimaryColumn()
  readonly id_provider?: string

  @Column({ type: 'text', default: null })
  name: string

  /**
   * this is the razón social in spanish
   * for invoice
   */
  @Column({ type: 'text', default: null })
  business_name: string

  @Column({ type: 'text', default: null })
  address?: string

  @Column({ type: 'text', default: null })
  email?: string

  @Column({ type: 'text', default: null })
  slug: string

  @Column({ type: 'text', default: null })
  ruc: string

  @Column({ type: 'text', default: null })
  ci: string

  @Column({ type: 'text', default: null })
  phone: string

  @Column({ type: 'text', default: null })
  whatsapp: string

  @Column({
    default: false,
  })
  is_delete?: boolean

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date

  @UpdateDateColumn({ type: 'timestamp' })
  update_at?: Date

  constructor() {
    if (!this.id_provider) {
      this.id_provider = uuid()
    }
  }
}

export default Provider
