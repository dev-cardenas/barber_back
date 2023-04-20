import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import AccountPlans from './AccountPlans';
import ProductServices from './ProductServices';
import TypeBusiness from './TypeBusiness';
import User from './User';

@Entity('company')
class Company {
  @PrimaryColumn()
  readonly id_company?: string;

  @Column({ type: 'text', default: null })
  address: string;

  @Column({ type: 'text', default: null })
  business_name: string;

  @Column({ type: 'text', default: null })
  company_name: string;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({ type: 'text', default: null })
  city: string;

  @Column({ type: 'text', default: null })
  lat: string;

  @Column({ type: 'text', default: null })
  lng: string;

  @Column({ type: 'text', default: null })
  ruc: string;

  @Column({ type: 'text', default: null })
  ci: string;

  @Column({ type: 'text', default: null })
  email: string;

  @Column({ type: 'text', default: null })
  hours_available: string;

  @Column({ type: 'text', default: null })
  link_instagram: string;

  @Column({ type: 'text', default: null })
  link_twitter: string;

  @Column({ type: 'text', default: null })
  link_facebook: string;

  @Column({ type: 'timestamp', default: null })
  payment_date: string;

  @Column({ type: 'timestamp', default: null })
  notice_of_payment: string;

  @Column({ type: 'text', default: null })
  phone: string;

  @Column({ type: 'text', default: null })
  whatsapp: string;

  @Column({ type: 'text', default: null })
  type_user: string;

  @Column({ type: 'text', default: null })
  account_recovery_email: string;

  @Column({ type: 'boolean', default: false })
  payment_status: boolean;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  // relationships
  @ManyToMany(() => ProductServices)
  @JoinTable({
    name: 'id_company_in_product_services',
  })
  product_services: ProductServices[];

  @OneToMany(() => TypeBusiness, (type_business: TypeBusiness) => type_business.company)
  @JoinColumn({ name: 'id_company_in_type_business' })
  type_business?: TypeBusiness[];

  @OneToMany(() => User, (user) => user.company)
  @JoinColumn({ name: 'id_users' })
  users: User[];

  @ManyToOne(() => AccountPlans, (account_plans) => account_plans.company, {
    nullable: true,
  })
  account_plan: AccountPlans;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_company) {
      this.id_company = uuid();
    }
  }
}

export default Company;
