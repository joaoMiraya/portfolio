import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigComponent } from '../utils/config/config.component';
import { NavigateService } from '../../services/navigate.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ConfigComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  menuIsOpen: boolean;

  constructor(private navigateService: NavigateService) {
    this.menuIsOpen = false;
  }
  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
  navigate(target: string) {
    this.navigateService.scrollToElement(target);
  }
}
