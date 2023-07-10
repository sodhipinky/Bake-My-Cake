import {Component} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
	product: Product | undefined;
	quantity: number = 0;
}
