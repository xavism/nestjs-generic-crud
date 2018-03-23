import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { User } from './entities/user.entity';
import { BaseService } from '../base/base.service';

@Component()
export class UsersService extends BaseService<User>{
	constructor(
		@InjectRepository(User)
		private readonly usersRepository: Repository<User>) {
			super(usersRepository);
	}
}