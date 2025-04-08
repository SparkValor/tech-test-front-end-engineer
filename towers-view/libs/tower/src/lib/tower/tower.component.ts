import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tower } from 'apps/towers-view/src/app/simulation/tower';
import { TowerSlotComponent } from 'tower-slot';

@Component({
  selector: 'tower',
  imports: [CommonModule, TowerSlotComponent],
  templateUrl: './tower.component.html',
  styleUrl: './tower.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TowerComponent {
  @Input()
  tower?: Tower;
}
