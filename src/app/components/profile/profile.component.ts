import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';

//Enlazo con los distintos ficheros del componente
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

//Clase del componente
export class ProfileComponent implements OnInit {

    user: any;
    userOrders: any;

    //constructor de la clase: le metemos el servicio que lleva la lógica del componente
    constructor(
        public movieService: MovieService,
        public userService: UserService,
        public orderService: OrderService
    ) { }

    //Qué ejecuta el componente al inicializarse
    ngOnInit() {
        this.user = localStorage.getItem('user');
        this.user = JSON.parse(this.user);

        this.getOrders(this.user.id);

    }

    private getOrders(userId: number) {

        this.orderService.getOrders(userId)
            .subscribe(res => {
                this.userOrders = res
                console.log(this.userOrders)
            })
    }


}
