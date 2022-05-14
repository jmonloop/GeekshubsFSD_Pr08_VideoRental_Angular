import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

//Enlazo con los distintos ficheros del componente
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

//Clase del componente
export class RegisterComponent {

    hide = true;

    userData = {
        name: '',
        surname: '',
        age: '',
        nickname: '',
        email: '',
        password: ''
    };


    //constructor de la clase: le metemos el servicio que lleva la lógica del componente
    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    register() {
        this.userService.register(this.userData).subscribe(
            (data) => {
                console.log(data);
                this.router.navigate(['/']);
            }
        );
    }


}
