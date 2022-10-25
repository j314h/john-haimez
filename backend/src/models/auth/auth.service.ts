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
import { Auth } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { UserUpdateDto } from './dto/auth-user-update.dto';
import { UserPasswordUpdateDto } from './dto/auth-user-password-update.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authModel: Repository<Auth>,
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
      if (!user) {
        throw new Error('Impossible de vous connecter, veuillez réessayer.');
      }

      // check password
      const isMatchPw = await bcrypt.compare(pw, user.password);
      if (!isMatchPw) {
        throw new Error('Impossible de vous connecter, veuillez réessayer.');
      }

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

      // test token exist
      const auths = await this.authModel.find({
        where: { user: user.id as any },
      });

      // if true return user without password
      if (user && auths.length > 0) {
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

      // create token and create token in database and add id in user
      const token = this.jwtService.sign(payload);
      await this.authModel.save({ token: token, user: user });

      this.logger.log('Function login : end');
      return {
        userCurrent: user,
        connected: true,
        access_token: token,
      };
    } catch (error) {
      this.logger.log('Function login : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  /**
   * delete token relation with user current
   * @param user any
   * @returns disconnect true
   */
  async logout(user: any) {
    try {
      this.logger.log('Function logout : start');

      // get all token for user current
      const auths = await this.authModel.find({ where: { user: user.id } });
      // delete all token
      const res = auths.map(async (auth) => {
        await this.authModel.delete(auth.id);
      });

      // if token is not exist return disconnect
      // else throw error
      if ((await res[0]) === undefined) {
        this.logger.log('Function logout : end');
        return {
          disconnect: true,
        };
      } else {
        this.logger.log('Function logout : end error if');
        throw new Error('Une erreur est survenue');
      }
    } catch (error) {
      this.logger.log('Function logout : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  /**
   * update name or email of user
   * @param user User
   * @param userUpdateDto UserUpdateDto
   */
  async updateUserCurrent(user: User, userUpdateDto: UserUpdateDto) {
    try {
      this.logger.log('Function updateUserCurrent : start');
      const res = await this.userService.update(user.id, userUpdateDto);
      if (res) {
        const userUpdated = await this.userService.findOne(user.id);
        this.logger.log('Function updateUserCurrent : end');
        return userUpdated;
      }
      this.logger.log('Function updateUserCurrent : if error end');
    } catch (error) {
      this.logger.log('Function updateUserCurrent : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  /**
   * update password user current
   */
  async updatePasswordUserCurrent(
    user: User,
    userPasswordUpdateDto: UserPasswordUpdateDto,
  ) {
    try {
      this.logger.log('Function updatePasswordUserCurrent : start');
      // test if newpassword and confirmnewpassword
      // test if password corresponding to password in database
      // hash new password
      // 
      this.logger.log('Function updatePasswordUserCurrent : end');
    } catch (error) {
      this.logger.log('Function updatePasswordUserCurrent : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }
}
