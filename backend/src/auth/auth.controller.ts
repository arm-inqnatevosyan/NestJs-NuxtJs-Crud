import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Auth } from './auth.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class Authcontroller {
  constructor(private service: AuthService, private jwtService: JwtService) {}

  @Get()
  gets(@Param() params) {
    return this.service.getUsers(params.id);
  }
  @Post('register')
  async Register(@Body() user: Auth) {
    console.log(user);
    try {
      user.password = await bcrypt.hash(user.password, 12);

      await this.service.registerUser(user);

      delete user.password;

      return { message: 'success' };
    } catch (e) {
      return e;
    }
  }

  @Post('login')
  async Login(@Body() req) {
    console.log('donee');
    const user = await this.service.findEmail(req.email);

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcrypt.compare(req.password, user[0].password))) {
      throw new BadRequestException('invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({
      id: user[0].id,
      name: user[0].name,
    });
    return { message: 'success', token: jwt };
  }
}
