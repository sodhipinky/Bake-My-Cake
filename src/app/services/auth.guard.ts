import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "./authentication.service";

export const authGuard: CanActivateFn = (route, state) => {
	const authenticationService: AuthenticationService = inject(AuthenticationService);
	const router: Router = inject(Router);
	if (!authenticationService.isLoggedIn) {
		router.navigate(['/login']);
	}
	return authenticationService.isLoggedIn;
};
