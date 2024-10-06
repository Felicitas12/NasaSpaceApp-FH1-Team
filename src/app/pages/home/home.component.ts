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
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
/*
  sceneGraph = Experience;
*/
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private sun!: THREE.Mesh;
  private animateId!: number;

  ngOnInit(): void {
    this.initThreeJs();
    this.addSun();
    this.animate();
  }
  initThreeJs(): void {
    // Создаем сцену
    this.scene = new THREE.Scene();

    // Создаем камеру
    this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    this.camera.position.z = 20; // Увеличиваем z для лучшего отображения

    // Рендерер
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Добавляем свет
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
    pointLight.position.set(50, 50, 50);
    this.scene.add(pointLight);

    // Обработка изменения размера окна
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  addSun(): void {
    // Создаем геометрию Солнца
    const geometry = new THREE.SphereGeometry(5, 32, 32); // Размер солнца и его детализация

    // Добавляем материал с текстурой для Солнца
    const material = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // Желтый цвет


    // Создаем сферу (Солнце)
    this.sun = new THREE.Mesh(geometry, material);
    this.scene.add(this.sun);
  }

  animate(): void {
    // Анимация
    this.animateId = requestAnimationFrame(() => this.animate());

    // Вращаем солнце
    this.sun.rotation.y += 0.005;

    // Рендерим сцену
    this.renderer.render(this.scene, this.camera);
  }

  ngOnDestroy(): void {
    // Останавливаем анимацию при уничтожении компонента
    cancelAnimationFrame(this.animateId);
  }
}
