import { Component, OnInit, HostListener } from '@angular/core';
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

    //Check if the user clicked outside the search bar once results are shown and reset search data
    outside = false;
    @HostListener("click")
    clicked() {
        this.outside = false;
    }
    @HostListener("document:click")
    clickedOut() {
        if(this.movies.length > 0) {
            this.outside = true;
            this.movies = [];
            this.searchData = "";
        }
    }


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