import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowthTrayComponent } from 'growth-tray';
import { Slot } from 'apps/towers-view/src/app/simulation/slot';

@Component({
  selector: 'lib-tower-slot',
  imports: [CommonModule, GrowthTrayComponent],
  templateUrl: './tower-slot.component.html',
  styleUrl: './tower-slot.component.css',
})
export class TowerSlotComponent {
  @Input()
  slot?: Slot;
}
