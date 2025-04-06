import { Component, OnDestroy } from '@angular/core';
import { TowerService } from './simulation/tower.service';
import { Tower } from './simulation/tower';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements OnDestroy {
  title = 'towers-view';

  towerData: Tower[];

  subscription;

  constructor(public towerService: TowerService) {
    this.towerData = [];
    this.subscription = towerService.towerData$.subscribe((data) => this.towerData = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
