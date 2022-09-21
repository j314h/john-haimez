import {
  Injectable,
  Logger,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { config } from 'src/config/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // log
  private logger: Logger = new Logger('Auth Service');

  /**
   * test user exist, password match
   * @param email string
   * @param pw string
   * @returns null | user
   */
  async validateUser(email: string, pw: string): Promise<any> {
    try {
      this.logger.log('Function validateUser : start');

      // get user with email
      const user = await this.userService.findWithEmail(email);
      // check password
      const isMatchPw = await bcrypt.compare(pw, user.password);

      // if true return user without password
      if (user && isMatchPw) {
        const { password, ...userTested } = user;
        this.logger.log('Function validateUser : end if OK');
        return userTested;
      }

      this.logger.log('Function validateUser : end');
      return null;
    } catch (error) {
      this.logger.log('Function validateUser : error');
      throw new UnauthorizedException(config.errorUnauthorized(error.message));
    }
  }

  /**
   * receved email from jwt strategy
   * and get user match with email
   * @param email string
   * @returns user | null
   */
  async validateJwtUser(email: string) {
    try {
      this.logger.log('Function validateJwtUser : start');

      // get user
      const user = await this.userService.findWithEmail(email);

      // if true return user without password
      if (user) {
        const { password, ...userTested } = user;
        return userTested;
      }

      this.logger.log('Function validateJwtUser : end');
      return null;
    } catch (error) {
      this.logger.log('Function validateJwtUser : error');
      throw new UnauthorizedException(config.errorUnauthorized(error.message));
    }
  }

  /**
   * created payload if AuthGard local is good
   * @param user user
   * @returns {access_token: token}
   */
  async login(user: any) {
    try {
      this.logger.log('Function login : start');

      // construct data for in token
      const payload = { userEmail: user.email, userId: user.id };

      this.logger.log('Function login : end');
      return {
        connected: true,
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      this.logger.log('Function login : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }
}
