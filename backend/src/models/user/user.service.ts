import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common/exceptions';
import { IUser } from './entities/user.interface';
import { config } from 'src/config/config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userModel: Repository<User>,
  ) {}

  // log
  private logger: Logger = new Logger('User Service');

  /**
   * create user in database
   * @param createUserDto User
   * @returns Promise User
   */
  async create(createUserDto: CreateUserDto): Promise<IUser> {
    try {
      this.logger.log('Function create : start');

      // create salt
      const salt = await bcrypt.genSalt();
      // hash password
      const hash = await bcrypt.hash(createUserDto.password, salt);
      // replace password by hash
      createUserDto.password = hash;

      // create in database
      const user = await this.userModel.save(createUserDto);
      // delete password on entity
      const { password, ...newUser } = user;

      this.logger.log('Function create : end');
      return newUser;
    } catch (error) {
      this.logger.log('Function create : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  /**
   * get all user
   * @returns Promise User[]
   */
  async findAll(): Promise<IUser[]> {
    try {
      this.logger.log('Function findAll : start');

      // get all user
      const users = await this.userModel.find();
      // delete password on entity
      const allUsers = users.map((user) => {
        const { password, ...newUser } = user;
        return newUser;
      });

      this.logger.log('Function findAll : end');
      return allUsers;
    } catch (error) {
      this.logger.log('Function findAll : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  /**
   * get one user
   * @param id number
   * @returns Promise User
   */
  async findOne(id: number): Promise<IUser> {
    try {
      this.logger.log('Function findOne : start');

      // get one user
      const user = await this.userModel.findOne({ where: { id: id } });
      const { password, ...newUser } = user;

      this.logger.log('Function findOne : end');
      return newUser;
    } catch (error) {
      this.logger.log('Function findOne : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  /**
   * get user with email,
   * return password for test
   * @param email string
   * @returns Promise<User>
   */
  async findWithEmail(email: string): Promise<User> {
    try {
      this.logger.log('Function findWithEmail : start');

      // get user with email
      const user = await this.userModel.findOne({ where: { email: email } });

      this.logger.log('Function findWithEmail : end');
      return user;
    } catch (error) {
      this.logger.log('Function findWithEmail : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  /**
   * update user
   * @param id number
   * @param updateUserDto updateUserDto
   * @returns Promise UpdateResult
   */
  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    try {
      this.logger.log('Function update : start');

      // update user
      const res = await this.userModel.update(id, updateUserDto);

      this.logger.log('Function update : end');
      return res;
    } catch (error) {
      this.logger.log('Function update : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  /**
   * delete one user
   * @param id number
   * @returns Promise<DeleteResult>
   */
  async remove(id: number): Promise<DeleteResult> {
    try {
      this.logger.log('Function remove : start');

      // delete one user
      const res = await this.userModel.delete(id);

      this.logger.log('Function remove : end');
      return res;
    } catch (error) {
      this.logger.log('Function remove : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }
}
