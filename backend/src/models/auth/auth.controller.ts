import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Delete,
} from '@nestjs/common';
import { ERole } from '../role/entities/role.interface';
import { RoleGuard } from '../role/guard/role.guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './guard/jwt.guard';
import { LocalGuard } from './guard/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post('/login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtGuard)
  @Delete('/logout')
  logout(@Request() req) {
    return this.authService.logout(req.user);
  }

  // ! delete this for prod
  @UseGuards(RoleGuard([ERole.ROOT]))
  @UseGuards(JwtGuard)
  @Get('/test-jwt')
  testJwt(@Request() req) {
    return { jwt: true, payload: req.user };
  }
}
