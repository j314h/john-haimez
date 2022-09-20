import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  // log
  private logger: Logger = new Logger('Local strategy');

  /**
   * test user with local strategy
   * @param email string
   * @param password string
   * @returns User
   */
  async validate(email: string, password: string): Promise<any> {
    try {
      this.logger.log('Function validate : start');

      // test user
      const user = await this.authService.validateUser(email, password);

      this.logger.log('Function validate : end');
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
