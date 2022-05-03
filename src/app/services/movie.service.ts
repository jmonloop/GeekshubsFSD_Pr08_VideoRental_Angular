import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { root, API_KEY } from '../../../src/utils/utils';
import { Movie } from '../models/movie.model';


@Injectable({
    providedIn: 'root'
})

export class MovieService {
    films: object[] = [];
    filmChoosen: object[] = [];

    constructor(private http: HttpClient) { }

    getMovies() {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${1}`;
        const url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`;

        return this.http.get<any>(url2)

        // return this.http.get<any>(url2).pipe(
        //     map(res => {
        //         console.log(res.results)
        //         return res.results
        //     }));
    }


    //     this.films = films

    // }

    // getFilms(): any[] {
    //     console.log("getFilms", this.films);

    //     return this.films

    // }
}
