import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

//Enlazo con los distintos ficheros del componente
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

//Clase del componente
export class LoginComponent {

    hide = true;

    userData = {
        email: '',
        password: ''
    };


    //constructor de la clase: le metemos el servicio que lleva la lógica del componente
    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    login() {
        this.userService.login(this.userData).subscribe(
            (res) => {
                console.log(res);
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', res.user);
                this.router.navigate(['/']);
            }
        )
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}