import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { Sort } from '@angular/material/sort';




//Enlazo con los distintos ficheros del componente
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

//Clase del componente
export class ProfileComponent implements OnInit {
    user: any;
    userOrders: Order[] = [];
    sortedData: Order[] = [];

    //constructor de la clase: le metemos el servicio que lleva la lógica del componente
    constructor(
        public movieService: MovieService,
        public userService: UserService,
        public orderService: OrderService,

    ) {

    }

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
                this.sortedData = this.userOrders.slice();
            })
    }

    sortData(sort: Sort) {
        const data = this.userOrders.slice();
        // console.log(sort)
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            // console.log(this.sortedData)
            // console.log(data)
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'filmTitle':
                    // console.log(compare(a.filmTitle, b.filmTitle, isAsc))
                    return compare(a.filmTitle, b.filmTitle, isAsc);
                case 'outDate':
                    return compare(a.outDate, b.outDate, isAsc);
                case 'price':
                    return compare(a.price, b.price, isAsc);
                default:
                    return 0;
            }
        })
    }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
    // console.log("A", a);
    // console.log("B", b);
    // console.log("ISASC", isAsc);
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }