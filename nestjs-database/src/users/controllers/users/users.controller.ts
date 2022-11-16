import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/serivces/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.fetchUsers();

    return users;
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    // const { confirmPassword, ...userDetails } = body;

    return this.userService.createUser(body);
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ) {
    const updatedUser = await this.userService.updateUser(id, body);

    return updatedUser;
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }

  @Post(':id/profiles')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateUserProfileDto,
  ) {
    return this.userService.createUserProfile(id, body);
  }

  @Post(':id/posts')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateUserPostDto,
  ) {
    return this.userService.createUserPost(id, body);
  }
}
