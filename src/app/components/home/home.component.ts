import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

//Enlazo con los distintos ficheros del componente
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

//Clase del componente
export class HomeComponent implements OnInit {

    //Variable para gestionar los resultados de películas
    movies: any;
    results: any;
    pgIndex: number = 1;

    //constructor de la clase: le metemos el servicio que lleva la lógica del componente
    constructor(public movieService: MovieService, private router: Router) { }

    //Qué ejecuta el componente al inicializarse
    ngOnInit() {
        this.getMovies(this.pgIndex);
    }

    //Lógica de la llamada al servicio.getMovies
    private getMovies(pgIndex: number) {

        this.movieService.getMovies(pgIndex)
            //subscribe sirve para utilizar los datos de una respuesta http o de un observable
            .subscribe(res => {
                //asignamos lo que devuelve movieService.getMovies() a la variable movies que usaremos para pintar las películas en el html
                this.movies = res.results
                this.results = res
            })
    }

    //Paginator
    onPageChange(pe: PageEvent) {
        if (this.pgIndex === 1) {
            this.getMovies(pe.pageIndex + 1)
        } else {
            this.getMovies(pe.pageIndex)
        }
    }

}
