import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/register.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register')
  register(@Body() createUserDto: RegisterDto) {
    return this.usersService.createUser(createUserDto);
  }
}
