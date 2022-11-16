import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response, response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) body: CreateUserDto) {
    console.log(body.age.toPrecision());
    return this.userService.createUser(body);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user)
      throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);

    return user;
  }
}
