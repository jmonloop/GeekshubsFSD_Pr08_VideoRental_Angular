import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'https://videostore-backend.herokuapp.com/orders/';


  constructor(private http: HttpClient) { }

  getOrders(userId: number): Observable<any> {
    return this.http.get<any>(`${this.url}${userId}`);
  }

  placeOrder(order: any): Observable<any> {
    console.log(order)
    return this.http.post<any>('https://videostore-backend.herokuapp.com/orders', order);
  }
}
