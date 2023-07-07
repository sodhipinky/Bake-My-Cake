import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
	@Input()
	product: Product = {
		id: 0,
		name: '',
		category: '',
		imageUrl: '',
		price: 0,
		unit: '',
		description: '',
		rating: 0
	};

	ratingArray: number[] = [];

	ngOnInit(): void {
		for (let index = 1; index <= this.product.rating; index++) {
			this.ratingArray.push(index);
		}
	}
}
