import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers:[AuthService],
  imports: [
    JwtModule.register({
      global: true,
      secret: 'Practice',
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule,
  ]
})
export class AuthModule { }
