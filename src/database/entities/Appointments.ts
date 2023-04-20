import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Company from './Company';
import User from './User';
import UserClient from './UserClient';
import InternalCustomer from './InternalCustomer';

@Entity('appointments')
class Appointments {
  @PrimaryColumn()
  readonly id_appointments?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  canceled_at: Date;

  @Column({ type: 'text', default: 'REQUEST' })
  process: string;

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

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @ManyToMany(() => UserClient)
  @JoinTable()
  users_client: UserClient[];

  @ManyToMany(() => InternalCustomer)
  @JoinTable()
  internal_customer: InternalCustomer[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_appointments) {
      this.id_appointments = uuid();
    }
  }
}

export default Appointments;
