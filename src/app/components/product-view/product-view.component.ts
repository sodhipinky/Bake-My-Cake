import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
	selector: 'app-product-view',
	templateUrl: './product-view.component.html',
	styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
	products: Product[] = []

	constructor(private productService: ProductService) {
	}

	ngOnInit(): void {
		this.productService.getAllProducts().subscribe(
			(products) => {
				this.products = products;
			})
	}

	onFilterProducts(category: string) {
		if (category === 'All') {
			this.productService.getAllProducts().subscribe(
				(products) => {
					this.products = products;
				}
			)
			return;
		}
		this.productService.getProductsByCategory(category).subscribe(
			(products) => {
				this.products = products;
			}
		)
	}

	onSearchProducts(searchedProductName: string) {
		this.productService.getAllProducts().subscribe(
			(products) => {
				if (searchedProductName === '') {
					this.products = products;
					return;
				} else {
					this.products = products.filter((product) => {
						return product.name.toLowerCase().includes(searchedProductName.toLowerCase());
					})
				}
			}
		)
	}
}
