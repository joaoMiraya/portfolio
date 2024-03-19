import { Component } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { HeaderComponent } from '../../portfolio/components/header/header.component';
import { FooterComponent } from '../../portfolio/components/footer/footer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [LoginComponent, HeaderComponent, FooterComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
