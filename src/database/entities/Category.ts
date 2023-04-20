import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { v4 as uuid } from 'uuid';

import SubCategory from './SubCategory';

@Entity('category')
class Category {
  @PrimaryColumn()
  readonly id_category?: string;

  @Column({ type: 'text', default: null })
  name: string;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  @ManyToMany(() => SubCategory)
  @JoinTable({
    name: 'id_sub_category_in_category',
  })
  sub_categories: SubCategory[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  update_at?: Date;

  constructor() {
    if (!this.id_category) {
      this.id_category = uuid();
    }
  }
}

export default Category;
