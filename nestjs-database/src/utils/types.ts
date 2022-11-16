export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type createUserProfileParams = {
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
};

export type createUserPostParams = {
  title: string;
  desc: string;
};
