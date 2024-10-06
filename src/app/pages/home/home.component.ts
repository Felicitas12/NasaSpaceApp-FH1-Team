import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { Experience } from '../../experience/experience.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgtCanvas, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  sceneGraph = Experience;
}
