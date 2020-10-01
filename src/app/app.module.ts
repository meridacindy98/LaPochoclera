import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { HomeComponent } from './components/home/home.component';

import { ClickOutsideModule } from 'ng-click-outside';
import { MovieComponent } from './components/movie/movie.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { GenresComponent } from './components/shared/genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    TvShowsComponent,
    HomeComponent,
    MovieComponent,
    TvShowComponent, 
    CarouselComponent, 
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule 
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
