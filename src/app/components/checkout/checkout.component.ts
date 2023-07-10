import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../../models/customer.model";

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	product: Product | undefined;
	customer: Customer = new Customer(0, '', '', '', {street: '', city: '', state: '', pinCode: 0})
	quantity: number = 0;

	constructor(private productService: ProductService,
				private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			const id = params['id'];
			this.productService.getProductById(id).subscribe(product => {
				this.product = product;
				this.quantity = params['quantity'];
			});
		});
	}
}
