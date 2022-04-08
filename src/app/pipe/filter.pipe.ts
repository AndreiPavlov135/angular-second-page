import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/models/user.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(users: IUser[], key: string): number {
    const usersLength = users.filter((item) => item.type === key);

    return usersLength.length;
  }
}
