import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Authcontroller } from './auth.controller';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';

@Module({
  providers: [AuthService],
  controllers: [Authcontroller],
  imports: [
    TypeOrmModule.forFeature([Auth]),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
