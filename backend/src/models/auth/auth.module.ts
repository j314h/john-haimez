import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'src/config/config';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    // conf jwt
    JwtModule.register(config.jwtConfig()),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
