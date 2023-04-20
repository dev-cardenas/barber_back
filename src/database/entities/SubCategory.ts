import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('sub_categories')
class SubCategory {
  @PrimaryColumn()
  readonly id_sub_category?: string;

  @Column({ type: 'text', default: null })
  name: string;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  update_at?: Date;

  constructor() {
    if (!this.id_sub_category) {
      this.id_sub_category = uuid();
    }
  }
}

export default SubCategory;
