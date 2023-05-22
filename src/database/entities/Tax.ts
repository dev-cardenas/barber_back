import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import ProductServices from './ProductServices'

@Entity('taxes')
class Tax {
  @PrimaryColumn()
  readonly id_tax?: string

  @Column({ type: 'text', default: null })
  percentage: string

  @Column({ type: 'text', default: null })
  type: string

  @Column({ type: 'text', default: null })
  slug: string

  @Column({
    default: false,
  })
  is_delete?: boolean

  @OneToMany(() => ProductServices, (product) => product.tax, {
    nullable: true,
  })
  @JoinColumn({
    name: 'id_product_services_in_tax',
  })
  product_services: ProductServices[]

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date

  constructor() {
    if (!this.id_tax) {
      this.id_tax = uuid()
    }
  }
}

export default Tax
