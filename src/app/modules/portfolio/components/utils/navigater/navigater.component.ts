import { Component, HostListener } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navigater',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './navigater.component.html',
  styleUrl: './navigater.component.scss'
})
export class NavigaterComponent {

  public visible: boolean = false;

  constructor(private navigateService: NavigateService) { };

@HostListener('window:scroll', ['$event'])
onScroll(){
  const currentPosition: number | any = this.navigateService.getCurrentPosition();
  if (currentPosition > 0) {
    this.visible = true;
  } else {
    this.visible = false;
  }
};

  handleGoToTop() {
    this.navigateService.goToTop()
  }

}
