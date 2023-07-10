import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/order.model";
import {Customer} from "../../models/customer.model";
import {OrderService} from "../../services/order.service";
import {CustomerService} from "../../services/customer.service";

@Component({
	selector: 'app-order-view',
	templateUrl: './order-view.component.html',
	styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
	orders: Order[] = [];
	customer: Customer | undefined;

	constructor(private orderService: OrderService,
				private customerService: CustomerService) {
	}

	ngOnInit(): void {
		this.orderService.getOrders().subscribe(orders => {
			this.orders = orders;
		});
		this.orders.forEach(order => {
			this.customerService.getCustomerById(order.customerId).subscribe(customer => {
				this.customer = customer;
			})
		})
	}
}
