import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private userService: UsersService) {}

  async intercept(context: ExecutionContext, next: CallHandler<any>) {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session || {};

    if (userId) {
      request.curentUser = await this.userService.findOne(userId);
    }
    return next.handle();
  }
}
