export interface IUser {
  id: number;
  username: string;
}

export interface IPost {
  id: number;
  userId: number;
  user?: null | IUser;
  title: string;
  body: string;
}
