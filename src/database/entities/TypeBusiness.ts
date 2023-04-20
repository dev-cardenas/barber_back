import { Entity, ManyToOne, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import Company from './Company';

@Entity('type_business')
class TypeBusiness {
  @PrimaryColumn()
  readonly id_type_business?: string;

  @Column({
    default: null,
    unique: true,
    nullable: true,
  })
  type_business: string;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  // @Column()
  @ManyToOne(() => Company, (company) => company.type_business)
  company: Company[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_type_business) {
      this.id_type_business = uuid();
    }
  }
}

export default TypeBusiness;
