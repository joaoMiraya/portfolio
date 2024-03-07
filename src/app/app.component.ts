import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './modules/portfolio/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  public openConfig: boolean;
  public isDark: boolean = false;

  constructor(public themeService: ThemeService) {
    this.openConfig = false;
    this.matIconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/config.svg')
    );

    //RESPONSAVEL PELO "THEMA"
    if (typeof localStorage !== 'undefined') {
      function setThemeInStorage() {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      const themeInStorage = localStorage.getItem("theme");
      if (themeInStorage && themeInStorage === 'dark') {
        this.isDark = true;
      } else {
        this.isDark = false
      }

      this.themeService.theme$.subscribe(theme => {
        if (theme === 'dark') {
          setThemeInStorage();
        } else {
          setThemeInStorage();
        }
      });
    } else return
  }

}
