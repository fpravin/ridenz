import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  create(createUserDto: CreateUserDto) {
    try {
      const createUser = {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
        phoneNumber: createUserDto.phoneNumber,
        password: createUserDto.password,
        isAdmin: createUserDto.isAdmin
      }

      const user = this.prisma.user.create({
        data: createUser
      })

      return user;
    } catch (err) {
      console.error("Error creating user:", err);
      throw new Error("Failed to create user");
    }
  }

  findAll() {
    return this.prisma.user.findMany({ where: { isAdmin: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
