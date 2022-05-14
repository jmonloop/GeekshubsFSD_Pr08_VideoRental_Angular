import { Component, OnInit, HostListener } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

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
    movies: any = [];

    //Check if the user clicked outside the search bar once results are shown and reset search data
    outside = false;

    searchFocus() {
        this.outside = false;
    }
    @HostListener("document:click")
    clickedOut() {

        if (this.movies.length > 0) {
            this.outside = true;
            this.movies = [];
            this.searchData = "";
        }
    }


    constructor(public movieService: MovieService, private router: Router) { }

    ngOnInit() {
    }

    //Send input value to service to search for movie (debounced)
    typeSearch(event: any) {
        this.searchData = event.target.value;
        if (this.searchData.length >= 3) {
            this.findMovieByTitle();
        }
    }
    //Call service to search for movie
    findMovieByTitle() {
        this.movieService.findMovieByTitle(this.searchData)
            .subscribe(res => {
                this.movies = res;
                this.movies = this.movies.results;
            })
    }


    goToMovie(film:any){
        this.movieService.locateFilm(film)
        if(this.router.url == '/film'){
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/film']);
            });
        }
    }
}