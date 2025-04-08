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

  towers : Tower[] = [];
  selected: number = 1;

  towerSubscription;


  constructor(public towerService: TowerService) {
    this.towerSubscription = towerService.towerData$.subscribe((towerData) => {
      this.towers = towerData;
    });
  }

  selectTower(selected: number) {
    this.selected = selected;
  }

  ngOnDestroy(): void {
    this.towerSubscription.unsubscribe();
  }
}
