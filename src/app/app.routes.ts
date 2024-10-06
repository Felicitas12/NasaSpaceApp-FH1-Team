import { Routes } from '@angular/router';
import { Planet } from './models';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanetComponent } from './planet/planet.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  // { path: 'sun', component: SunComponent },
  // { path: 'mercury', component: MercuryComponent },
  // { path: 'venus', component: VenusComponent },
  // { path: 'earth', component: EarthComponent },
  // { path: 'mars', component: MarsComponent },
  // { path: 'jupiter', component: JupiterComponent },
  // { path: 'saturn', component: SaturnComponent },
  // { path: 'uranus', component: UranusComponent },
  // { path: 'neptune', component: NeptuneComponent },
  { path: 'sun', component: PlanetComponent, data: { key: Planet.Sun } },
  { path: 'mercury', component: PlanetComponent, data: { key: Planet.Mercury } },
  { path: 'venus', component: PlanetComponent, data: { key: Planet.Venus } },
  { path: 'earth', component: PlanetComponent, data: { key: Planet.Earth } },
  { path: 'mars', component: PlanetComponent, data: { key: Planet.Mars } },
  { path: 'jupiter', component: PlanetComponent, data: { key: Planet.Jupiter } },
  { path: 'saturn', component: PlanetComponent, data: { key: Planet.Saturn } },
  { path: 'uranus', component: PlanetComponent, data: { key: Planet.Uranus } },
  { path: 'neptune', component: PlanetComponent, data: { key: Planet.Neptune } },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
