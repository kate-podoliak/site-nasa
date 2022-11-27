import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ApodComponent } from './modules/apod/apod.component';
import { AsteroidsComponent } from './modules/asteroids/asteroids.component';
import { WeatherComponent } from './modules/weather/weather.component';
import { RoverComponent } from './modules/rover/rover.component';
import { LibraryComponent } from './modules/library/library.component';
import { DonkiComponent } from './modules/donki/donki.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { MainComponent } from './shared/components/main/main.component';
import { CalendarModule } from 'primeng/calendar';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { ToStringPipe } from "./core/pipes/toString.pipe";
import { UrlToVideoUrlPipe } from "./core/pipes/urlToVideoUrl.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApodComponent,
    AsteroidsComponent,
    WeatherComponent,
    RoverComponent,
    LibraryComponent,
    DonkiComponent,
    NotFoundComponent,
    MainComponent,
    ToStringPipe,
    UrlToVideoUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GalleriaModule,
    CalendarModule,
    GalleriaModule,
    InputTextModule,
    CheckboxModule,
    NgxPaginationModule,
    [FormsModule],
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
