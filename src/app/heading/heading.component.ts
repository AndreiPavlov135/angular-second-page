import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IResponse } from 'src/app/models/response.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  constructor(private userService: UserService) {}
  amountTransactions!: number;

  ngOnInit(): void {
    this.subscriptions.add(
      this.userService
        .getUserData()
        .subscribe((res: IResponse) => (this.amountTransactions = res.total))
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
