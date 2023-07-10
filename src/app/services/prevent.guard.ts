import {CanDeactivateFn} from '@angular/router';
import {CheckoutComponent} from "../components/checkout/checkout.component";
import {ProductDetailComponent} from "../components/product-detail/product-detail.component";

export const preventGuard: CanDeactivateFn<ProductDetailComponent | CheckoutComponent> = (component, currentRoute, currentState, nextState) => {
	if (component instanceof ProductDetailComponent) {
		return component.isOrderProgress();
	} else {
		return component.isSubmitted();
	}
};
