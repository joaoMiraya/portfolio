import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

// COMPONENTS IMPORT
import { HeaderComponent } from '../../components/header/header.component';
import { WritterComponent } from '../../components/utils/writter/writter.component';
import { AboutComponent } from '../about/about.component';
import { ConfigComponent } from '../../components/utils/config/config.component';
import { TecsComponent } from '../tecs/tecs.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FormationComponent } from '../formation/formation.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigaterComponent } from '../../components/utils/navigater/navigater.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    WritterComponent,
    AboutComponent,
    ConfigComponent,
    TecsComponent,
    ProjectsComponent,
    FormationComponent,
    NavigaterComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  constructor() {
  }

}
