import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

import Brand from './Brand'
import Category from './Category'
import ProductCostHistory from './ProductCostHistory'
import Stock from './Stock'
import SubCategory from './SubCategory'
import Tax from './Tax'
import BaseProductServices from './BaseProductServices'

@Entity('product_service')
class Product {
  @PrimaryColumn()
  readonly id_product_services?: string

  @Column({ type: 'text', default: null })
  color?: string

  @Column({ type: 'text', default: null })
  name: string

  @Column({ type: 'text', default: null })
  hours_and_minutes: string

  @Column({ type: 'text', default: null })
  measure?: string

  @Column({ type: 'text', default: null })
  size?: string

  /**
   * Precio con el que compre
   */
  @Column({ type: 'int', default: null })
  price_cost: number

  /**
   * Precio de venta
   */
  @Column({ type: 'int', default: null })
  price_sale: number

  @Column({ type: 'int', default: null })
  price_promotion: number

  @Column({ type: 'int', default: null })
  weight: number

  // example g, kg
  @Column({ type: 'text', default: null })
  type_weight?: string

  @Column({ type: 'int', default: null })
  liter: number

  /**
   * Precio mayorista
   */
  @Column({ type: 'int', default: null })
  price_wholesaler: number

  @Column({ type: 'text', default: null })
  product_code: string

  @Column({ type: 'text', default: null })
  product_sku: string

  @Column({ type: 'text', default: null })
  images: string

  @Column({ type: 'text', default: null })
  erase_code: string

  @Column({ type: 'text', default: null })
  description: string

  @Column({ type: 'text', default: null })
  slug: string

  @Column({ type: 'text', default: null })
  tags: string

  @Column({ type: 'text', default: null })
  assessment: string

  @Column({ type: 'text', default: null })
  features: string

  @Column({ type: 'text', default: null })
  lote: string

  @Column({
    default: false,
  })
  is_delete?: boolean

  // relationships
  @ManyToOne(() => Brand, (brand) => brand.product_service, {
    nullable: true,
  })
  brand: Brand

  @ManyToMany(() => Category, (category) => category.id_category, {
    nullable: true,
  })
  @JoinTable({
    name: 'id_category_in_product_service',
    joinColumns: [{ name: 'id_product_service' }],
    inverseJoinColumns: [{ name: 'id_category' }],
  })
  categories: Category[]

  @ManyToMany(
    () => SubCategory,
    (sub_category) => sub_category.id_sub_category,
    {
      nullable: true,
    },
  )
  @JoinTable({
    name: 'id_sub_category_in_product',
    joinColumns: [{ name: 'id_product' }],
    inverseJoinColumns: [{ name: 'id_sub_category' }],
  })
  sub_categories: SubCategory[]

  @ManyToOne(
    () => BaseProductServices,
    (baseProduct) => baseProduct.product_services,
    {
      nullable: true,
    },
  )
  base_product_services: BaseProductServices

  @OneToMany(
    () => ProductCostHistory,
    (product_cost_history) => product_cost_history.product_services,
  )
  @JoinColumn({ name: 'id_history' })
  history: ProductCostHistory[]

  @OneToMany(() => Stock, (stock) => stock.product_service, {
    nullable: true,
  })
  @JoinColumn({ name: 'id_stock' })
  stock: Stock[]

  @ManyToOne(() => Tax, (tax) => tax.product_services, {
    nullable: true,
  })
  tax: Tax

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date

  constructor() {
    if (!this.id_product_services) {
      this.id_product_services = uuid()
    }
  }
}

export default Product
