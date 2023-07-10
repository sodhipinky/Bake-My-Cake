import {Component} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
	product: Product | undefined;
	quantity: number = 0;

	constructor(private productService: ProductService,
				privateActivatedRoute: ActivatedRoute) {
	}
}
