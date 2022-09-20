import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

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
  async create(createUserDto: CreateUserDto): Promise<User> {
    this.logger.log('Function create : start');

    // hash password
    const hash = await bcrypt.hash(
      createUserDto.password,
      process.env.APP_SECRET_JWT,
    );
    createUserDto.password = hash;

    // create in database
    const user = this.userModel.save(createUserDto);

    this.logger.log('Function create : end');
    return user;
  }

  /**
   * get all user
   * @returns Promise User[]
   */
  async findAll(): Promise<User[]> {
    this.logger.log('Function findAll : start');

    // get all user
    const users = this.userModel.find();

    this.logger.log('Function findAll : end');
    return users;
  }

  /**
   * get one user
   * @param id number
   * @returns Promise User
   */
  async findOne(id: number): Promise<User> {
    this.logger.log('Function findOne : start');

    // get one user
    const user = this.userModel.findOne({ where: { id: id } });

    this.logger.log('Function findOne : end');
    return user;
  }

  /**
   * get user with email,
   * return password for test
   * @param email string
   * @returns Promise<User>
   */
  async findWithEmail(email: string): Promise<User> {
    this.logger.log('Function findWithEmail : start');

    // get user with email
    const user = this.userModel.findOne({ where: { email: email } });

    this.logger.log('Function findWithEmail : end');
    return user;
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
    this.logger.log('Function update : start');

    // update user
    const res = this.userModel.update(id, updateUserDto);

    this.logger.log('Function update : end');
    return res;
  }

  /**
   * delete one user
   * @param id number
   * @returns Promise<DeleteResult>
   */
  async remove(id: number): Promise<DeleteResult> {
    this.logger.log('Function remove : start');

    // delete one user
    const res = this.userModel.delete(id);

    this.logger.log('Function remove : end');
    return res;
  }
}
