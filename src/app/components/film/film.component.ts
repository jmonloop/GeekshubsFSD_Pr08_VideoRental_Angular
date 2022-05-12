import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { Moment } from 'moment';
import * as moment from 'moment';

//Enlazo con los distintos ficheros del componente
@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss']
})

//Clase del componente
export class FilmComponent implements OnInit {

    movie: any;
    user: any;

    //constructor de la clase: le metemos el servicio que lleva la lógica del componente
    constructor(
        public movieService: MovieService,
        public userService: UserService,
        public orderService: OrderService
    ) { }

    //Qué ejecuta el componente al inicializarse
    ngOnInit() {
        this.movie = this.movieService.filmChoosen;

        this.user = localStorage.getItem('user');
        this.user = JSON.parse(this.user);

    }

    public placeOrder() {


        let order = {
            filmId: this.movie.id,
            userId: this.user.id,
            price: 3,
            outDate: moment().format('YYYY/MM/DD'),
            returnDate: moment().add(15, 'days').format('YYYY/MM/DD')
        }


        this.orderService.placeOrder(order)
            .subscribe(
                (response) => {
                    console.log(response);
                }
            )

    }


}
