import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RoleModule } from '../role/role.module';
import { UserProvider } from './user.provider';

@Module({
  imports: [RoleModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserProvider],
  exports: [UserService],
})
export class UserModule {}
