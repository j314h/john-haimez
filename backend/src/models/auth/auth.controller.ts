import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Delete,
  Body,
  Patch,
} from '@nestjs/common';
import { ERole } from '../role/entities/role.interface';
import { RoleGuard } from '../role/guard/role.guard';
import { AuthService } from './auth.service';
import { UserPasswordUpdateDto } from './dto/auth-user-password-update.dto';
import { UserUpdateDto } from './dto/auth-user-update.dto';
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

  @UseGuards(JwtGuard)
  @Patch('/update-user-current')
  updateUserCurrent(@Request() req, @Body() userUpdateDto: UserUpdateDto) {
    return this.authService.updateUserCurrent(req.user, userUpdateDto);
  }

  @UseGuards(JwtGuard)
  @Patch('/update-password-user-current')
  updatePasswordUserCurrent(
    @Request() req,
    @Body() userPasswordUpdateDto: UserPasswordUpdateDto,
  ) {
    return this.authService.updatePasswordUserCurrent(
      req.user,
      userPasswordUpdateDto,
    );
  }

  // ! delete this for prod
  @UseGuards(RoleGuard([ERole.ROOT]))
  @UseGuards(JwtGuard)
  @Get('/test-jwt')
  testJwt(@Request() req) {
    return { jwt: true, payload: req.user };
  }

  @UseGuards(JwtGuard)
  @Get('/verified')
  verifed(@Request() req) {
    return { connected: true, userCurrent: req.user };
  }
}
