import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

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

    //constructor de la clase: le metemos el servicio que lleva la lógica del componente
    constructor(public movieService: MovieService, private router: Router) { }

    //Qué ejecuta el componente al inicializarse
    ngOnInit() {
        this.getMovies();
    }

    //Lógica de la llamada al servicio.getMovies
    private getMovies() {

        this.movieService.getMovies()
            //subscribe sirve para utilizar los datos de una respuesta http o de un observable
            .subscribe(res => {
                //asignamos lo que devuelve movieService.getMovies() a la variable movies que usaremos para pintar las películas en el html
                this.movies = res.results
            })
    }


}
