import { IUser } from './user.model';

export interface IResponse {
  total: number;
  data: IUser[];
}
