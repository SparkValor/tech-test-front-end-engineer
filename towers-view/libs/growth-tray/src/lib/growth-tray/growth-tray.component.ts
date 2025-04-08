import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowthJobComponent } from 'growth-job';
import { GrowthTray } from 'apps/towers-view/src/app/simulation/growth-tray';

@Component({
  selector: 'lib-growth-tray',
  imports: [CommonModule, GrowthJobComponent],
  templateUrl: './growth-tray.component.html',
  styleUrl: './growth-tray.component.css',
})
export class GrowthTrayComponent {
  @Input() growthTray?: GrowthTray;
}
