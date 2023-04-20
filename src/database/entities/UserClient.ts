import { Entity, OneToMany, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import Notification from './Notification';
import { v4 as uuid } from 'uuid';

@Entity('user_client')
class UserClient {
  @PrimaryColumn()
  readonly id_user_client?: string;

  @Column({ type: 'text', default: null })
  address?: string;
  /**
   * this is the razón social in Spanish
   * for invoice
   */
  @Column({ type: 'text', default: null })
  name?: string;

  @Column({ type: 'text', default: null })
  last_name?: string;

  @Column({ type: 'text', default: null })
  email: string;

  @Column({ type: 'text', default: null })
  phone?: string;

  @Column({ type: 'text', default: null })
  image?: string;

  @Column({ type: 'text', default: null })
  whatsapp?: string;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  @OneToMany(() => Notification, (notification) => notification.user_client)
  notification?: Notification;

  @Exclude()
  @Column({ type: 'text', default: null })
  password_hash: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_user_client) {
      this.id_user_client = uuid();
    }
  }
}

export default UserClient;
