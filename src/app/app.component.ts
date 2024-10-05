import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, HeaderComponent],
})
export class AppComponent {
  title = 'my-angular-app';
}
