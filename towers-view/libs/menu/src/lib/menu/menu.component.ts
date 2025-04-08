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
  @Input() numItems: number = 0;
  @Input() itemName: string = '';

  menuItems;

  constructor() {

    this.menuItems = [{number: 1 }, {number: 2}];
  }
}
