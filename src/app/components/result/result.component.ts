import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IResponse } from 'src/app/models/response.model';
import { IUser } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  keys = ['Income', 'Investments', 'Outcome', 'Loans'];
  keysNumber = ['income', 'investment', 'outcome', 'loan'];
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.userService
        .getUserData()
        .subscribe((res: IResponse) => (this.users = res.data))
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
