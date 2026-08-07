import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from '../auth/dto/register.dto';
import { Role } from '../common/utils/enums/roles';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) { }

  async createUser(createUserDto: RegisterDto): Promise<User> {
    const user = await this.model.create({
      firstname: createUserDto.firstname,
      lastname: createUserDto.lastname,
      role: Role.USER,
      isloggedin: true,
      username: createUserDto.username,
      password: createUserDto.password,
      email: createUserDto.email,
      isverified: true,
    });

    return user;
  }

  async findOne(username: string): Promise<UserDocument | null> {
    return this.model.findOne({ username }).exec();
  }
}
