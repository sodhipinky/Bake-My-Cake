import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
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
	product: Product | undefined
	customer: Customer = new Customer(0, '', '', '', {street: '', city: '', state: '', pinCode: 0});
	order: Order | undefined
	quantity: number = 0;
	amount: number = 0;

	constructor(private productService: ProductService,
				private activatedRoute: ActivatedRoute,
				private orderService: OrderService,
				private customerService: CustomerService,
				private router: Router,
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

	submit() {
		this.customerService.saveCustomer(this.customer).subscribe(customer => {
			this.customer = customer;
			this.orderService.saveOrder(new Order(
				this.product?.id ?? 0,
				this.customer.id,
				new Date(),
				this.quantity,
				this.amount
			))
				.subscribe(order => {
					this.order = order;
					this.snackbar.open('Order Placed Successfully', 'Dismiss', {
						duration: 5000,
						horizontalPosition: 'center',
						verticalPosition: 'top'
					});
				})
			this.router.navigate(['/products']);
		});
	}
}
