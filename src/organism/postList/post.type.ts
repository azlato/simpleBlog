import { IUser } from '../userDetail/user.type';

export interface IPost {
  id: number;
  userId: number;
  user?: null | IUser;
  title: string;
  body: string;
}
