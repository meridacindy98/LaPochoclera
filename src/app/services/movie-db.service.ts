import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  API_KEY = '743097aa4589ac1cfcc9c47d567f9e0b';
  URL_MOVIE_DB = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient ) { }

  getMostPopular( type: string ){
    let url = this.URL_MOVIE_DB + '/' + type + '/popular?api_key=' + this.API_KEY + '&language=es';
    return this.http.get(url);
  }

  getTopRated( type: string ){
    let url = this.URL_MOVIE_DB + '/' + type + '/top_rated?api_key=' + this.API_KEY + '&language=es';
    return this.http.get(url);
  }

  getGenre( type: string ){
    let url = this.URL_MOVIE_DB + '/genre/' + type + '/list?api_key=' + this.API_KEY + '&language=es';
    return this.http.get(url);
  }

  getDataForGenre( type: string, genreId: number ){
    let url = this.URL_MOVIE_DB + '/discover/' + type + '?api_key=' + this.API_KEY + '&with_genres=' + genreId + '&language=es';
    console.log(url)
    return this.http.get(url);
  }

}
