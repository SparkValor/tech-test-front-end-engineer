import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true
})
export class MenuComponent {
  @Input() menuItems: object[];
  @Input() itemName: string;

  constructor() {
    this.itemName = '';
    this.menuItems = [{number: 1 }, {number: 2}];
  }
}
