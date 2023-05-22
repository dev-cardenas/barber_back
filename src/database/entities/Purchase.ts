import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  // OneToMany,
  // JoinColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('purchase')
class Purchase {
  @PrimaryColumn()
  readonly id_purchase?: string

  @Column({ type: 'text', default: null })
  name: string

  @Column({ type: 'text', default: null })
  description: string

  @Column({ type: 'text', default: null })
  ruc: string

  @Column({ type: 'text', default: null })
  status: string

  @Column({ type: 'text', default: null })
  slug: string

  @Column({ type: 'text', default: null })
  value: string

  @Column({ type: 'text', default: null })
  type: string

  @Column({
    default: false,
  })
  is_delete?: boolean

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date

  @UpdateDateColumn({ type: 'timestamp' })
  update_at?: Date

  constructor() {
    if (!this.id_purchase) {
      this.id_purchase = uuid()
    }
  }
}

export default Purchase
