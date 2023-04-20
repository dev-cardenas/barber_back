import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import ProductServices from './ProductServices';
import Deposit from './Deposit';

@Entity('stock')
class Stock {
  @PrimaryColumn()
  readonly id_stock?: string;

  @Column({ type: 'text', default: null })
  name: string;

  @Column({ type: 'text', default: null })
  description: string;

  @Column({ type: 'int', default: null })
  min_stock: number;

  @Column({ type: 'int', default: null })
  max_stock: number;

  @Column({ type: 'int', default: null })
  quantity: number;

  @Column({ type: 'boolean', default: null })
  status: boolean;

  @Column({ type: 'text', default: null })
  slug: string;

  @ManyToOne(() => ProductServices, (product_service) => product_service.stock, {
    nullable: true,
  })
  product_service: ProductServices;

  @OneToOne(() => Deposit, (deposit) => deposit.id_stock)
  @JoinColumn()
  id_deposit: Deposit;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_stock) {
      this.id_stock = uuid();
    }
  }
}

export default Stock;
