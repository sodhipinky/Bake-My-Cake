import {CanDeactivateFn} from '@angular/router';

export const preventGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
	return true;
};
