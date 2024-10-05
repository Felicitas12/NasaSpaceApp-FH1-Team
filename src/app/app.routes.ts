import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SunComponent } from './planets/sun/sun.component';
import { MercuryComponent } from './planets/mercury/mercury.component';
import { VenusComponent } from './planets/venus/venus.component';
import { EarthComponent } from './planets/earth/earth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sun', component: SunComponent },
  { path: 'mercury', component: MercuryComponent },
  { path: 'venus', component: VenusComponent },
  { path: 'earth', component: EarthComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];