import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tower } from 'apps/towers-view/src/app/simulation/tower';
import { TowerSlotComponent } from 'tower-slot';
// import { ActivatedRoute, Router } from '@angular/router';
// import { map, Observable, take } from 'rxjs';

@Component({
  selector: 'tower',
  imports: [CommonModule, TowerSlotComponent],
  templateUrl: './tower.component.html',
  styleUrl: './tower.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TowerComponent implements OnInit {
  //towers$ = this.select('towers');
  // towers$: Tower[] | null;

  // @Input()
  // selected?: number;
  @Input()
  tower?: Tower;

  constructor() { 
    
  }

  ngOnInit(): void {
    // console.log('Selected in TowerComp: ', this.selected);
    // console.log('TowerData: ', this.towers);
    // if (this.selected) {
    //   this.tower = this.towers?.[this.selected];
    //   console.log('Tower in TowerComp: ', this.tower);
    // }
      

  }
}
