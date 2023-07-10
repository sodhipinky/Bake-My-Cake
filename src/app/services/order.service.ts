import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/order.model";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class OrderService {
	url: string = 'http://localhost:3002/orders';

	constructor(private httpClient: HttpClient) {
	}

	saveOrder(order: Order): Observable<Order> {
		return this.httpClient.post<Order>(this.url, order);
	}

	getOrders(): Observable<Array<Order>> {
		return this.httpClient.get<Array<Order>>(this.url);
	}

	getOrdersByCustomerId(customerId: number): Observable<Array<Order>> {
		return this.httpClient.get<Array<Order>>(this.url + '?customerId=' + customerId);
	}
}
