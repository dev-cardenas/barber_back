import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import { v4 as uuid } from 'uuid'

import UserRoles from './UserRoles'
import UserPermissions from './UserPermissions'
import Company from './Company'
import Notification from './Notification'

@Entity('user')
class User {
  @PrimaryColumn()
  readonly id_user?: string

  @Column({ type: 'text', default: null })
  address?: string

  /**
   * this is the razón social in Spanish
   * for invoice
   */
  @Column({ type: 'text', default: null })
  name?: string

  @Column({ type: 'text', default: null })
  hours_available?: string

  @Column({ type: 'text', default: null })
  last_name?: string

  @Column({ type: 'text', default: null })
  email: string

  @Column({ type: 'text', default: null })
  phone?: string

  @Column({ type: 'text', default: null })
  image?: string

  @Column({ type: 'text', default: null })
  whatsapp?: string

  @Column({
    default: false,
  })
  is_delete?: boolean

  // @Column()
  @ManyToMany(() => UserRoles)
  @JoinTable({ name: 'user_user_roles' })
  user_roles?: UserRoles[]

  @ManyToMany(() => UserPermissions)
  @JoinTable({ name: 'user_user_permissions' })
  user_permissions?: UserPermissions[]

  @ManyToOne(() => Company, (company) => company.users)
  company?: Company

  @OneToMany(() => Notification, (notification) => notification.user)
  notification?: Notification

  @Exclude()
  @Column({ type: 'text', default: null })
  password_hash: string

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date

  constructor() {
    if (!this.id_user) {
      this.id_user = uuid()
    }
  }
}

export default User
