import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'Matt',
      email: 'matt@gmail.com',
    },
    {
      username: 'Jarot',
      email: 'jarot@gmail.com',
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);

    return;
  }

  fetchUserById(id: number) {
    return {
      id,
      username: 'Matt',
      email: 'matt@gmail.com',
    };

    // return null;
  }
}
