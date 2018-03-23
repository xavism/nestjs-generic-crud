import { Component, Inject, BadGatewayException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { IBaseService } from '../base/IBase.service';
import { BaseEntity } from './base.entity';

@Component()
export class BaseService<T extends BaseEntity> implements IBaseService<T>{
	constructor(
    private readonly genericRepository: Repository<T>) {}

  create(entity: any): Promise<number>{
	  try {
		return new Promise<number> ((resolve, reject) => {
			this.genericRepository.save(entity)
			.then(created=> resolve(created.id))
			.catch(err => reject(err))
			})
		}
		catch(error) {
			throw new BadGatewayException(error);
		}
  }

  getAll(): Promise<T[]> {
	  try {
		return <Promise<T[]>>this.genericRepository.find();
	  } catch (error) {
		throw new BadGatewayException(error);
	}
  }

  get(id: number): Promise<T> {
	try {
		  
	} catch (error) {
		throw new BadGatewayException(error);
	}
  	return <Promise<T>>this.genericRepository.findOneById(id);
  }

  delete(id: number) {
	try {
		this.genericRepository.deleteById(id)
	} catch (error) {
		throw new BadGatewayException(error);
	}
  }

  update(entity: any): Promise<any>{
	try {
		return new Promise<any> ((resolve, reject) => {
			this.genericRepository.findOneById(entity.id)
			.then(responseGet => {
				try {
					if (responseGet == null) reject('Not existing')
					let retrievedEntity: any = responseGet as any
					this.genericRepository.save(retrievedEntity)
					.then(response => resolve(response))
					.catch(err => reject(err))
				}
				catch(e) {
						reject(e)
				}
			})
			.catch(err => reject(err))
			}) 
	} catch (error) {
		throw new BadGatewayException(error);
	}
  }
}