import { Component } from '@angular/core';
import { TowerService } from './simulation/tower.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title = 'towers-view';

  constructor(public towerService: TowerService) {}
}
