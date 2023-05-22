import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('user_permissions')
class UserPermissions {
  @PrimaryColumn()
  readonly id_user_permissions?: string

  @Column({ type: 'text', default: null })
  name?: string

  @Column({ type: 'text', default: null })
  description?: string

  @Column({
    default: false,
  })
  is_delete?: boolean

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date

  constructor() {
    if (!this.id_user_permissions) {
      this.id_user_permissions = uuid()
    }
  }
}

export default UserPermissions
