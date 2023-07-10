import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	public static isLoggedIn: boolean = false;
	username: string = '';
	password: string = '';
	@Output()
	loginEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private router: Router,
				private authenticationService: AuthenticationService) {
	}

	login() {
		LoginComponent.isLoggedIn = this.username === 'admin' && this.password === 'admin';
		this.loginEvent.emit(LoginComponent.isLoggedIn);
		if (LoginComponent.isLoggedIn) {
			this.router.navigate(['/orders']);
		}
	}
}
