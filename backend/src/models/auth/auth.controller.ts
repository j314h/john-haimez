import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from './strategy/jwt.guard';
import { LocalGuard } from './strategy/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post('/login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  // ! delete this for product
  @UseGuards(JwtGuard)
  @Get('/test-jwt')
  testJwt(@Request() req) {
    return { jwt: true, payload: req.user };
  }
}
