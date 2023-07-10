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
	orderDetails: [] = [];

	constructor(private orderService: OrderService,
				private customerService: CustomerService,
				private productService: ProductService) {
	}

	ngOnInit(): void {
		this.orderService.getOrders().subscribe(orders => {
			this.orders = orders;
		});
		this.orders.forEach(order => {
			let orderDetail: {};
			this.productService.getProductById(order.productId).subscribe(product => {
				orderDetail = {
					'orderId': order.id,
					'orderDate': order.date,
					'productName': product.name,
					'quantity': order.quantity,
					'price': product.price
				}
			});
			this.customerService.getCustomerById(order.customerId).subscribe(customer => {
				orderDetail = {
					...orderDetail,
					'customerName': customer.name,
					'customerEmail': customer.email,
					'customerPhone': customer.phone,
					'customerStreet': customer.address.street,
					'customerCity': customer.address.city,
					'customerState': customer.address.state,
					'customerPinCode': customer.address.pinCode,
					'amount': order.amount
				}
			});
		})
	}
}
