import { Component, Input, OnInit } from '@angular/core';
import { MovieDBService } from '../../../services/movie-db.service';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  genreName: string;
  genreId: number;
  genresArray: any[] = [];

  constructor( private movieDBService: MovieDBService, private sharedService: SharedService ) { }

  ngOnInit(): void {
    this.getGenres(this.type);
  }

  getGenres(type: string){
    this.movieDBService.getGenre(type).subscribe( genres => {         
      this.genresArray =  this.sharedService.spliceArray(genres['genres'], 5)
    } );
  }  

}

