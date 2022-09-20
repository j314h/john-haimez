import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  // log
  private logger: Logger = new Logger('Auth Service');

  /**
   * test user exist, password match
   * @param email string
   * @param pw string
   * @returns null | user
   */
  async validateUser(email: string, pw: string): Promise<any> {
    this.logger.log('Function validateUser : start');

    // get user
    const user = await this.userService.findWithEmail(email);

    // ! implement test bcrypt

    // if user and if password is match
    // return user without password
    if (user && user.password === pw) {
      const { password, ...userTested } = user;
      return userTested;
    }

    this.logger.log('Function validateUser : end');
    return null;
  }
}
