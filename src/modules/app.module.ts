import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
    modules: [UsersModule, TypeOrmModule.forRoot()],
})
export class ApplicationModule {
    constructor(private readonly connection: Connection) {}
}