import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../../models/customer.model";
import {Order} from "../../models/order.model";
import {OrderService} from "../../services/order.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomerService} from "../../services/customer.service";

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	product: Product = new Product(0, '', '', '', 0, '', '', 0);
	customer: Customer = new Customer(0, '', '', '', {street: '', city: '', state: '', pinCode: 0})
	quantity: number = 0;
	amount: number = 0;
	order: Order = new Order(this.product.id, this.customer.id, new Date(), this.quantity, this.amount);

	constructor(private productService: ProductService,
				private activatedRoute: ActivatedRoute,
				private orderService: OrderService,
				private customerService: CustomerService,
				private snackbar: MatSnackBar) {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			const id = params['id'];
			this.productService.getProductById(id).subscribe(product => {
				this.product = product;
				this.quantity = params['quantity'];
				this.amount = this.product.price * this.quantity;
			});
		});
	}

	submitCustomer() {
		this.customerService.saveCustomer(this.customer).subscribe(customer => {
			this.order.customerId = customer.id;
		});
	}

	submitOrder() {
		this.orderService.saveOrder(this.order).subscribe(order => {
			this.order.id = order.id;
		});
	}

	submit() {
		this.submitCustomer();
		this.submitOrder();
		this.snackbar.open('Order Placed Successfully', 'Dismiss', {
			duration: 3000
		});
	}
}
