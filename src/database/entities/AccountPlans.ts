import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import Company from './Company';

@Entity('account_plans')
class AccountPlans {
  @PrimaryColumn()
  readonly id_account_plans?: string;

  @Column({ type: 'text', default: null })
  code: string;

  @Column({ type: 'text', default: null })
  name: string;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({ type: 'text', default: null })
  description: string;

  @Column({ type: 'int', default: null })
  price: number;

  @Column({ type: 'int', default: null })
  available_days: number;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  @OneToMany(() => Company, (company) => company.account_plan, {
    nullable: true,
  })
  @JoinColumn({
    name: 'id_account_plans_in_company',
  })
  company: Company[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_account_plans) {
      this.id_account_plans = uuid();
    }
  }
}

export default AccountPlans;
