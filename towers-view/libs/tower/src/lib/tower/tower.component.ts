import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tower',
  imports: [CommonModule],
  templateUrl: './tower.component.html',
  styleUrl: './tower.component.css',
})
export class TowerComponent implements OnInit {

  @Input() number?: number;

  constructor() { 
  }

  ngOnInit(): void {
    if (!this.number)
      this.number = 1;
  }
}
