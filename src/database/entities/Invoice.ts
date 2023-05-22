import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('invoice')
class Invoice {
  @PrimaryColumn()
  readonly id_invoice?: string

  @Column({ type: 'text', default: null })
  details: string

  /**
   * Timbrado
   * debe ser obligatoriamente 8 numeros
   */
  @Column({ type: 'text', default: null })
  stamped: string

  @Column({ type: 'text', default: null })
  invoice_number: string

  @Column({ type: 'text', default: null })
  slug: string

  @Column({ type: 'text', default: null })
  status: string

  /**
   * inicio de vigencia
   */
  @Column({ type: 'timestamp', default: null })
  beginning_of_validity: Date

  /**
   * Valido hasta
   */
  @Column({ type: 'timestamp', default: null })
  validity_date: Date

  /**
   * fecha de emisión
   */
  @Column({ type: 'timestamp', default: null })
  date_of_issue: Date

  @Column({ type: 'int', default: null })
  sub_total: number

  @Column({ type: 'int', default: null })
  total: number

  /**
   * Si es contado o a crédito
   */
  @Column({ type: 'text', default: null })
  sale_condition: string

  @Column({ type: 'int', default: null })
  tax_type: number

  @Column({
    default: false,
  })
  is_delete?: boolean

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date

  @UpdateDateColumn({ type: 'timestamp' })
  update_at?: Date

  constructor() {
    if (!this.id_invoice) {
      this.id_invoice = uuid()
    }
  }
}

export default Invoice
