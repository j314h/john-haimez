import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { BadRequestException } from '@nestjs/common/exceptions';
import { config } from 'src/config/config';
import { UserProvider } from './user.provider';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userModel: Repository<User>,
    private userProvider: UserProvider,
  ) {}

  // log
  private logger: Logger = new Logger('User Service');

  /**
   * create user in database
   * @param createUserDto User
   * @returns Promise User
   */
  async create(createUserDto: CreateUserDto) {
    try {
      this.logger.log('Function create : start');

      // add hash password in createUserDto
      createUserDto.password = await this.userProvider.hash(
        createUserDto.password,
      );

      // add role in createUserDto
      createUserDto.role = await this.userProvider.getRoleForUser(
        createUserDto.roleId,
      );

      // create
      const user = await this.userModel.save(createUserDto);
      // delete password and roleId on entity
      const { password, roleId, ...newUser } = user;

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
  async findAll() {
    try {
      this.logger.log('Function findAll : start');

      // get all
      const users = await this.userModel.find({ relations: { role: true } });
      // delete password on entity on all user
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
  async findOne(id: number) {
    try {
      this.logger.log('Function findOne : start');

      // get one
      const user = await this.userModel.findOne({
        where: { id: id },
        relations: { role: true },
      });
      // delete password on user
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
  async findWithEmail(email: string) {
    try {
      this.logger.log('Function findWithEmail : start');

      // get user with email
      const user = await this.userModel.findOne({
        where: { email: email },
        relations: { role: true },
      });

      // ! voir pourquoi on retourne password

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
  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      this.logger.log('Function update : start');

      // add role in updateUserDto
      updateUserDto.role = await this.userProvider.getRoleForUser(
        updateUserDto.roleId,
      );
      // delete roleId on updateUserDto
      const { roleId, ...updateUser } = updateUserDto;

      // update
      const res = await this.userModel.update(id, updateUser);

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
  async remove(id: number) {
    try {
      this.logger.log('Function remove : start');

      // delete
      const res = await this.userModel.delete(id);

      this.logger.log('Function remove : end');
      return res;
    } catch (error) {
      this.logger.log('Function remove : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }
}
