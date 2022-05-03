import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/movie.model'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    movies: any;

    constructor(public movieService: MovieService) { }

    ngOnInit() {

        this.getMovies();

        console.log(this.movies)

    }

    private getMovies() {

        this.movieService.getMovies()
          .subscribe( res => {
            this.movies = res.results   
          }) 
        
        // this.movies = this.movieService.getMovies();

    }

}
