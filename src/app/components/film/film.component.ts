import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

//Enlazo con los distintos ficheros del componente
@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss']
})

//Clase del componente
export class FilmComponent implements OnInit {

    movie: any;
    //constructor de la clase: le metemos el servicio que lleva la lógica del componente
    constructor(public movieService: MovieService) { }

    //Qué ejecuta el componente al inicializarse
    ngOnInit() {

        this.movie = this.movieService.filmChoosen;
        console.log(this.movie)
    }



}
