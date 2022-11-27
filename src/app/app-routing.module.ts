import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApodComponent} from "./modules/apod/apod.component";
import {AsteroidsComponent} from "./modules/asteroids/asteroids.component";
import {RoverComponent} from "./modules/rover/rover.component";
import {WeatherComponent} from "./modules/weather/weather.component";
import {LibraryComponent} from "./modules/library/library.component";
import {DonkiComponent} from "./modules/donki/donki.component";
import {NotFoundComponent} from "./modules/not-found/not-found.component";

const routes: Routes = [
  { path: 'apod', component: ApodComponent},
  { path: 'asteroids', component: AsteroidsComponent},
  { path: 'rover', component: RoverComponent},
  { path: 'weather', component: WeatherComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'donki', component: DonkiComponent},
  { path: '',   redirectTo: '/apod', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
