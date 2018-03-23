import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

@Entity('users')
export class User extends BaseEntity{

  @Column({ length: 50 })
  @ApiModelPropertyOptional()
  readonly name: string;

  @Column({ length: 50 })
  @ApiModelProperty()
  readonly age: number;
  
  @Column({ length: 50 })
  @ApiModelProperty()
  readonly favouriteColor: string;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}