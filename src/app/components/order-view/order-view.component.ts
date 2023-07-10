import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/order.model";
import {OrderService} from "../../services/order.service";
import {CustomerService} from "../../services/customer.service";
import {ProductService} from "../../services/product.service";

@Component({
	selector: 'app-order-view',
	templateUrl: './order-view.component.html',
	styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
	orders: Order[] = [];

	constructor(private orderService: OrderService,
				private customerService: CustomerService,
				private productService: ProductService) {
	}

	ngOnInit(): void {
	}
}
