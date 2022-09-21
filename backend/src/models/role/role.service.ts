import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { config } from 'src/config/config';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleModel: Repository<Role>,
  ) {}

  // log
  private logger: Logger = new Logger('Role Service');

  create(createRoleDto: CreateRoleDto) {
    try {
      this.logger.log('Function create : start');

      // create role
      const role = this.roleModel.save(createRoleDto);

      this.logger.log('Function create : end');
      return role;
    } catch (error) {
      this.logger.log('Function create : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  async findAll() {
    try {
      this.logger.log('Function findAll : start');

      // get all
      const roles = await this.roleModel.find();

      this.logger.log('Function findAll : end');
      return roles;
    } catch (error) {
      this.logger.log('Function findAll : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  async findOne(id: number) {
    try {
      this.logger.log('Function findOne : start');

      // get one
      const role = await this.roleModel.findOne({ where: { id: id } });

      this.logger.log('Function findOne : end');
      return role;
    } catch (error) {
      this.logger.log('Function findOne : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  async findByLibelle(libelle: string) {
    try {
      this.logger.log('Function findByLibelle : start');

      // get on with libelle
      const role = await this.roleModel.findOne({
        where: { libelle: libelle },
      });

      this.logger.log('Function findByLibelle : end');
      return role;
    } catch (error) {
      this.logger.log('Function findByLibelle : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      this.logger.log('Function update : start');

      // update
      const res = await this.roleModel.update(id, updateRoleDto);

      this.logger.log('Function update : end');
      return res;
    } catch (error) {
      this.logger.log('Function update : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }

  async remove(id: number) {
    try {
      this.logger.log('Function remove : start');

      // get one
      const role = await this.roleModel.findOne({ where: { id: id } });

      // if role has users not delete throw error
      if (role.users && role.users.length > 0) {
        this.logger.log('Function remove : end not delete');
        throw new ForbiddenException(
          config.errorForbidden(
            'Impossible de supprimer le role, des utilisateurs sont assignés à ce role.',
          ),
        );
      } else {
        this.logger.log('Function remove : end');
        return await this.roleModel.delete(id);
      }
    } catch (error) {
      this.logger.log('Function remove : error');
      throw new BadRequestException(config.errorBad(error.message));
    }
  }
}
