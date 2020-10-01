import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../../services/movie-db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  forGenre: boolean = false;

  constructor( private movieDBService: MovieDBService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      console.log('caca');
      console.log(params['genreId']);
      if ( !params['genreId'] ){
        console.log("no se selecciono")
        this.forGenre = false;
      }else {
        console.log("se selecciono")
        this.forGenre = true;
      }
      
    } );
   }

  ngOnInit(): void {
  }

}
