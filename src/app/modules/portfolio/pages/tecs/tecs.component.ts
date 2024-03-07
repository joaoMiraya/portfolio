import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tecs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecs.component.html',
  styleUrl: './tecs.component.scss'
})


export class TecsComponent extends DataService {

 

}
