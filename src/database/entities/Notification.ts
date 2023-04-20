import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';

import User from './User';
import UserClient from './UserClient';

@Entity('notification')
class Notification {
  @PrimaryColumn()
  readonly id_notification?: string;

  @Column({ type: 'text', default: null })
  title: string;

  @Column({ type: 'text', default: null })
  content: string;

  @Column({ type: 'text', default: null })
  slug: string;

  @Column({ type: 'boolean', default: false })
  read: boolean;

  @Column({
    default: false,
  })
  is_delete?: boolean;

  @ManyToOne(() => User, (user) => user.notification)
  user: User;

  @ManyToOne(() => UserClient, (user) => user.notification)
  user_client: UserClient;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at?: Date;

  constructor() {
    if (!this.id_notification) {
      this.id_notification = uuid();
    }
  }
}

export default Notification;
