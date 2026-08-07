
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { User, UserDocument } from '../users/schemas/user.schema';
import { RegisterDto } from './dto/register.dto';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async signin(signinDto: SigninDto): Promise<{ access_token: string }> {
    const user = (await this.usersService.findOne(signinDto.username)) as
      | UserDocument
      | null;

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(signinDto.password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user._id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<User> {
    const existingUser = await this.usersService.findOne(registerDto.username);

    if (existingUser) {
      throw new ConflictException('User already registered');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    return this.usersService.createUser({
      ...registerDto,
      password: hashedPassword,
    });
  }
}
