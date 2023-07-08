import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	constructor(private activatedRoute: ActivatedRoute,
				private productService: ProductService) {
	}

	ngOnInit(): void {
	}
}
