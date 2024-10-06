import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterModule, HeaderComponent, FooterComponent, NgtCanvas],
})
export class AppComponent {
    sceneGraph = Experience;
    title = 'my-angular-app';
}