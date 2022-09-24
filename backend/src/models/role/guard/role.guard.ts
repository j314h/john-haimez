import { ERole } from '../entities/role.interface';
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { config } from 'src/config/config';

export const RoleGuard = (roles: ERole[]): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest();
      const user = request.user;

      // if role's user is not in tab of guard throw error
      if (roles.includes(user.role.libelle)) {
        return true;
      } else {
        throw new ForbiddenException(
          config.errorForbidden("Vous n'avez pas les droits"),
        );
      }
    }
  }

  return mixin(RoleGuardMixin);
};
