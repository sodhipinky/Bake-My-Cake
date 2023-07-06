import {Component} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
	selector: 'app-product-view',
	templateUrl: './product-view.component.html',
	styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
	products: Product[] = []

	constructor(private productService: ProductService) {
	}
}
