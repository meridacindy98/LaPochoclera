import { Component, Input, OnInit } from '@angular/core';
import { MovieDBService } from '../../../services/movie-db.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() title: string;
  @Input() idCarousel: string;
  @Input() type: string;
  @Input() getData: string;
  @Input() genrerId: number;
  @Input() showOptions: boolean;  

  isMovie: boolean = true;
  selectedMovie: boolean = true;
  selectedTv: boolean;
  array: any[] = [];

  URL_IMG = 'https://image.tmdb.org/t/p/w500';

  constructor( private movieDBService: MovieDBService ) { }

  ngOnInit(): void {    

    switch(this.getData){
      case 'mostPopular':{
        this.getMostPopular('movie');
        break;
      }
      case 'topRated':{
        this.getTopRated('movie');
        break;
      }
      case 'forGenrer':{
        this.getDataForGenre( this.type, this.genrerId);
        break;
      }
    }
  }

/* getMostPopular */
getMostPopular( type: string ){
  this.movieDBService.getMostPopular(type).subscribe( data => {
    this.array = data['results'];      
    this.spliceArray( this.array );
  });  
}

/* getTopRated */
getTopRated( type: string ){
  this.movieDBService.getTopRated(type).subscribe( data => {
    this.array = data['results'];       
    this.spliceArray( this.array );     
  });    
}

 /* getDataForGenre */
 getDataForGenre( type: string, genreId: number ){
  this.movieDBService.getDataForGenre( type, genreId).subscribe( data => {
    console.log('data');
    console.log(data);
    this.array = data['results'];       
    this.spliceArray( this.array );     
  } );    
}


  /* getMovies */
  getMovies(){
    this.selectedMovie = true;
    this.selectedTv = false;
    switch(this.getData){
      case 'mostPopular':{
        this.getMostPopular('movie');
        break;
      }
      case 'topRated':{
        this.getTopRated('movie');
        break;
      }
      case 'forGenrer':{
        this.getDataForGenre('movie', this.genrerId);
        break;
      }
    }
  }

  /* getTvShows */
  getTvShows(){
    this.selectedMovie = false;
    this.selectedTv = true;
    switch(this.getData){
      case 'mostPopular':{
        this.getMostPopular('tv');
        break;
      }
      case 'topRated':{
        this.getTopRated('tv');
        break;
      }
      case 'forGenrer':{
        this.getDataForGenre('tv', this.genrerId);
        break;
      }
    }
  }

  /* spliceArray */
  spliceArray( array ){
    let results: any[] = [];
    this.array.forEach( data => {
      results.push(this.array.splice(0,5));
    } )
    this.array = results;
  }

}
