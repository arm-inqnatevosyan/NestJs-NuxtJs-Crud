import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private usersRepository: Repository<Auth>,
  ) {}
  async getUsers(Auth): Promise<Auth[]> {
    return await this.usersRepository.find();
  }

  async findEmail(email) {
    return await this.usersRepository.find({
      select: ['email', 'name', 'password'],
      where: [{ email: email }],
    });
  }

  async registerUser(name: Auth) {
    const newUser = this.usersRepository.create({ ...name });
    return await this.usersRepository.save(newUser);
  }
}
