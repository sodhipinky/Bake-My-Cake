import {Component} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
	selector: 'app-product-view',
	templateUrl: './product-view.component.html',
	styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
	products: Product[] = []
}
