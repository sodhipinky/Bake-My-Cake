import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/order.model";
import {OrderService} from "../../services/order.service";
import {CustomerService} from "../../services/customer.service";
import {ProductService} from "../../services/product.service";
import {OrderDetails} from "../../models/order-details.model";

@Component({
	selector: 'app-order-view',
	templateUrl: './order-view.component.html',
	styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
	orders: Order[] = [];
	orderDetails: OrderDetails[] = [];

	constructor(private orderService: OrderService,
				private customerService: CustomerService,
				private productService: ProductService) {
	}

	ngOnInit(): void {
		this.orderService.getOrders().subscribe((orders: Order[]) => {
			this.orders = orders;
			this.orders.forEach((order: Order) => {
				this.customerService.getCustomerById(order.customerId).subscribe((customer) => {
					this.productService.getProductById(order.productId).subscribe((product) => {
						this.orderDetails.push(new OrderDetails(
							order?.id ?? 0,
							product.name,
							order.quantity,
							product.price,
							order.amount,
							customer.name,
							customer.email,
							customer.phone,
							customer.address
						));
					});
				});
			});
		});
		console.log(this.orderDetails)
	}
}
