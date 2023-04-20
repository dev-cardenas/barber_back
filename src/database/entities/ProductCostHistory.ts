import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import ProductServices from './ProductServices';

@Entity('product_cost_history')
class ProductCostHistory {
  @PrimaryColumn()
  readonly id_product_cost_history?: string;

  @Column({ type: 'timestamp', default: null })
  date: Date;

  @Column({ type: 'text', default: null })
  name: string;

  @Column({ type: 'int', default: null })
  price_cost: number;

  @Column({ type: 'int', default: null })
  price_sale: number;

  @Column({ type: 'int', default: null })
  price_promotion: number;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  // relationships
  @ManyToOne(() => ProductServices, (product) => product.history)
  product_services: ProductServices;

  @ManyToOne(() => ProductServices, (product) => product.history)
  base_product_services: ProductServices;

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  update_at?: Date;

  constructor() {
    if (!this.id_product_cost_history) {
      this.id_product_cost_history = uuid();
    }
  }
}

export default ProductCostHistory;
