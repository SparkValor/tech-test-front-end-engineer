import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowthJob } from 'apps/towers-view/src/app/simulation/growth-job';

@Component({
  selector: 'lib-growth-job',
  imports: [CommonModule],
  templateUrl: './growth-job.component.html',
  styleUrl: './growth-job.component.css',
})
export class GrowthJobComponent {
  @Input()
  growthJob?: GrowthJob;
}
