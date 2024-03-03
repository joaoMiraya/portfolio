import { Component } from '@angular/core';

// COMPONENTS IMPORT
import { HeaderComponent } from '../../components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { WritterComponent } from '../../components/utils/writter/writter.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, WritterComponent, AboutComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor() {

  }
}
