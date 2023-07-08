import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.model";

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	product: Product | undefined;
	ratingArray: number[] = [];

	constructor(private activatedRoute: ActivatedRoute,
				private productService: ProductService) {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			const id = params['id'];
			this.productService.getProductById(id).subscribe(product => {
				this.product = product;
				for (let index = 1; index <= this.product.rating; index++) {
					this.ratingArray.push(index);
				}
			});
		});

	}
}
