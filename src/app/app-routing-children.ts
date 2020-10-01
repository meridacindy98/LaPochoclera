import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

export const ROUTES_CHILDREN: Routes = [   

    { path: 'movies', component: MoviesComponent },
    { path: 'tv-shows', component: TvShowsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'movies' },
    { path: '', pathMatch: 'full', redirectTo: 'movies' },   

];
