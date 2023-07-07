import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-search-product',
	templateUrl: './search-product.component.html',
	styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
	searchedProductName: string = '';

	@Output()
	searchProductEvent: EventEmitter<string> = new EventEmitter<string>();

	searchProducts() {
		this.searchProductEvent.emit(this.searchedProductName);
	}
}
