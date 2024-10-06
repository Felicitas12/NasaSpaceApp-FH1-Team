import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { Experience } from '../../experience/experience.component';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgtCanvas
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit{
  sceneGraph = Experience;

  ngOnInit(): void {

  }

}
