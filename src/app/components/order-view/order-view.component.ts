import {Component} from '@angular/core';
import {Order} from "../../models/order.model";
import {Customer} from "../../models/customer.model";

@Component({
	selector: 'app-order-view',
	templateUrl: './order-view.component.html',
	styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent {
	orders: Order[] = [];
	customer: Customer | undefined;
}
