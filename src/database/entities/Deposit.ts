import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';

import Stock from './Stock';

@Entity('deposit')
class Deposit {
  @PrimaryColumn()
  readonly id_deposit?: string;

  @Column({ type: 'text', default: null })
  name: string;

  @Column({ type: 'text', default: null })
  location: string;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  // relationships
  @OneToOne(() => Stock, (stock) => stock.id_deposit, {
    nullable: true,
  })
  id_stock: Stock;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_deposit) {
      this.id_deposit = uuid();
    }
  }
}

export default Deposit;
