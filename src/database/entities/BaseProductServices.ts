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
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Brand from './Brand';
import Category from './Category';
import ProductCostHistory from './ProductCostHistory';
import SubCategory from './SubCategory';
import ProductServices from './ProductServices';

@Entity('base_product_services')
class BaseProductServices {
  @PrimaryColumn()
  readonly id_base_product_services?: string;

  @Column({ type: 'text', default: null })
  color: string;

  @Column({ type: 'text', default: null })
  name: string;

  @Column({ type: 'text', default: null })
  measure: string;

  @Column({ type: 'text', default: null })
  size: string;
  /**
   * Precio con el que compre
   */
  @Column({ type: 'int', default: null })
  price_cost: number;

  /**
   * Precio de venta
   */
  @Column({ type: 'int', default: null })
  price_sale: number;

  @Column({ type: 'int', default: null })
  price_promotion: number;

  @Column({ type: 'int', default: null })
  weight: number;

  // example g, kg
  @Column({ type: 'text', default: null })
  type_weight: string;

  @Column({ type: 'int', default: null })
  liter: number;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  /**
   * Precio mayorista
   */
  @Column({ type: 'int', default: null })
  price_wholesaler: number;

  @Column({ type: 'text', default: null })
  product_code: string;

  @Column({ type: 'text', default: null })
  product_sku: string;

  @Column({ type: 'text', default: null })
  images: string;

  @Column({ type: 'text', default: null })
  erase_code: string;

  @Column({ type: 'text', default: null })
  description: string;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({ type: 'text', default: null })
  tags: string;

  @Column({ type: 'text', default: null })
  assessment: string;

  @Column({ type: 'text', default: null })
  features: string;

  @Column({ type: 'text', default: null })
  lote: string;

  // relationships
  @ManyToOne(() => Brand, (brand) => brand.base_product, {
    nullable: true,
  })
  brand: Brand;

  @ManyToMany(() => Category, (category) => category.id_category, {
    nullable: true,
  })
  @JoinTable({
    name: 'category_base_product_services',
    joinColumns: [{ name: 'id_base_product_services' }],
    inverseJoinColumns: [{ name: 'id_category' }],
  })
  categories: Category[];

  @ManyToMany(() => SubCategory, (sub_category) => sub_category.id_sub_category, {
    nullable: true,
  })
  @JoinTable({
    name: 'sub_category_base_product_services',
    joinColumns: [{ name: 'id_base_product_services' }],
    inverseJoinColumns: [{ name: 'id_sub_category' }],
  })
  sub_categories: SubCategory[];

  @OneToMany(() => ProductServices, (product) => product.base_product_services, {
    nullable: true,
  })
  @JoinColumn({
    name: 'id_product_services_in_base_product_services',
  })
  product_services: ProductServices[];

  @OneToMany(() => ProductCostHistory, (product_cost_history) => product_cost_history.base_product_services)
  @JoinColumn({ name: 'id_history_base' })
  history_base: ProductCostHistory[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_base_product_services) {
      this.id_base_product_services = uuid();
    }
  }
}

export default BaseProductServices;
