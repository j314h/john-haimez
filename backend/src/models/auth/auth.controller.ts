import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalGuard } from './strategy/local.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalGuard)
  @Post('/login')
  async login(@Request() req) {
    return req.user;
  }
}
