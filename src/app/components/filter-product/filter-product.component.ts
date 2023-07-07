import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-filter-product',
	templateUrl: './filter-product.component.html',
	styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent {
	category: string = ''

	@Output()
	filterProductEvent: EventEmitter<string> = new EventEmitter<string>();

	filterProduct() {
		this.filterProductEvent.emit(this.category);
	}
}
