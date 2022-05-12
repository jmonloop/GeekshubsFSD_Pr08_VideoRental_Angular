import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='https://videostore-backend.herokuapp.com/users/';


  constructor(private httpClient:HttpClient) { }

  login(userData:any):Observable<any>{
    return this.httpClient.post(this.url+'login',userData);
  }

  isLogged():boolean{
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  register(userData:any):Observable<any>{
    return this.httpClient.post(this.url+'register',userData, {responseType: 'text'});
  }
}
