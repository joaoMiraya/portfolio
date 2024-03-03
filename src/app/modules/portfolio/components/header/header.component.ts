import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigComponent } from '../utils/config/config.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ConfigComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  menuIsOpen: boolean;

  constructor() {
    this.menuIsOpen = false;
  }
  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
