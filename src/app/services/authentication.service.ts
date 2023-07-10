import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	isLoggedIn: boolean = false;

	constructor() {
	}

	login() {
		this.isLoggedIn = true;
	}

	logout() {
		this.isLoggedIn = false;
	}
}
