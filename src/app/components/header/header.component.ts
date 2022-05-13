import {Component, OnInit} from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

/**
 * @title Basic menu
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    searchData: string = "";
    movies: any;
  
    constructor(public movieService: MovieService) { }
   
    ngOnInit() {
    }
  

    findMovieByTitle() {
        this.movieService.findMovieByTitle(this.searchData)
        .subscribe(res => {
            this.movies = res;
            this.movies = this.movies.results;
        })
    }
  }