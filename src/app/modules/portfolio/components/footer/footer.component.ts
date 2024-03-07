import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public year: number;
  public author: string;
  public text: string;

  constructor() {
    const date = new Date();
    this.year = date.getFullYear();
    this.text = 'Desenvolvido por'
    this.author = 'João Victor B Miraya'
  }
  concatValue() {
    return '© ' + this.text + ' ' + this.author + ' - ' + this.year
  }
}
