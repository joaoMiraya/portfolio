import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../../../../app.component';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent extends AppComponent {

  toggleOpenConfig() {
    this.openConfig = !this.openConfig;

  }
  setDarkTheme() {
    localStorage.setItem('theme', 'dark');
    this.themeService.setTheme('dark')
  }
  setLightTheme() {
    localStorage.setItem('theme', 'light');
    this.themeService.setTheme('light')
  }
}
