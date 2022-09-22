import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { config } from 'src/config/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.secretJwt,
    });
  }

  // log
  private logger: Logger = new Logger('Jwt strategy');

  /**
   * test payload from token for test
   * with get user with email
   * @param payload object
   * @returns user
   */
  async validate(payload: any) {
    try {
      this.logger.log('Function validate : start');

      // get user with email for test if exist
      const user = await this.authService.validateJwtUser(payload.userEmail);

      this.logger.log('Function validate : end');
      return user;
    } catch (error) {
      this.logger.log('Function validate : error');
      throw new UnauthorizedException(config.errorUnauthorized(error.message));
    }
  }
}
