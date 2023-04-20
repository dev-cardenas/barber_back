import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { v4 as uuid } from 'uuid';

import UserPermissions from './UserPermissions';

@Entity('user_roles')
class UserRoles {
  @PrimaryColumn()
  readonly id_user_roles?: string;

  @Column({
    default: null,
    unique: true,
    nullable: true,
  })
  user_role?: string;

  @Column({ type: 'text', default: null })
  description?: string;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  @ManyToMany(() => UserPermissions)
  @JoinTable()
  permission?: UserPermissions[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_user_roles) {
      this.id_user_roles = uuid();
    }
  }
}

export default UserRoles;
