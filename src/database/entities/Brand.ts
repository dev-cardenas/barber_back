import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';

import ProductServices from './ProductServices';
import BaseProductServices from './BaseProductServices';

@Entity('brand')
class Brand {
  @PrimaryColumn()
  readonly id_brand?: string;

  @Column({ type: 'text', default: null })
  description: string;

  @Column({ type: 'text', default: null })
  image: string;

  @Column({ type: 'text', default: null })
  name: string;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({ type: 'text', default: null })
  status: string;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  @ManyToOne(() => ProductServices, (product) => product.brand, {
    nullable: true,
  })
  @JoinColumn({
    name: 'brand_product',
  })
  product_service: ProductServices[];

  @ManyToOne(() => BaseProductServices, (base_product) => base_product.brand, {
    nullable: true,
  })
  @JoinColumn({
    name: 'brand_product_base',
  })
  base_product: BaseProductServices[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_brand) {
      this.id_brand = uuid();
    }
  }
}

export default Brand;
