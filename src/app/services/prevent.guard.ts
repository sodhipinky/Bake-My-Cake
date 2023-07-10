import {CanDeactivateFn} from '@angular/router';
import {CheckoutComponent} from "../components/checkout/checkout.component";

export const preventGuard: CanDeactivateFn<CheckoutComponent> = (component, currentRoute, currentState, nextState) => {
	return component.isSubmitted();
};
