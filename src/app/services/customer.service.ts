import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer.model";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class CustomerService {

	url: string = 'http://localhost:3001/customers'

	constructor(private httpClient: HttpClient) {
	}

	saveCustomer(customer: Customer | undefined): Observable<Customer> {
		return this.httpClient.post<Customer>(this.url, customer);
	}
}
