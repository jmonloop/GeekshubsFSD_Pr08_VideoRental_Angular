//Método propio de angular para hacer inyección de dependencias
import { Injectable } from '@angular/core';
//Método propio de angular para hacer http request (equivalente a axios)
import { HttpClient } from '@angular/common/http';
import { root, API_KEY } from '../../../src/utils/utils';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

//Le digo que este servicio es una dependencia disponible en todo el proyecto
@Injectable({
    providedIn: 'root'
})

//Declaro y exporto la clase del servicio
export class MovieService {

    filmChoosen: object = {};

    //en el constructor genero la variable http del tipo HttpClient para los requests a la API
    constructor(private http: HttpClient) { }

    //Método para traer pelis de TMDB
    getMovies() {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${1}`;

        //Después del método (get, post, put, etc) siempre se pone el tipo que llegará. any es un comodín pero se debe ser estricto con el tipado
        return this.http.get<any>(url)
    }



    locateFilm(filmChoose:object){
      
        this.filmChoosen = filmChoose;
        
        return;
     }


}

