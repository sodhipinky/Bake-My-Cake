import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	url: string = 'http://localhost:3000/products';

	constructor(private httpClient: HttpClient) {
	}

	getAllProducts(): Observable<Array<Product>> {
		return this.httpClient.get<Array<Product>>(this.url);
	}

	getProductByCategory(category: string): Observable<Array<Product>> {
		return this.httpClient.get<Array<Product>>(this.url + '?category=' + category);
	}
}
