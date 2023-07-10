import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	username: string = '';
	password: string = '';
	@Output()
	loginEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(private router: Router,
				private authenticationService: AuthenticationService) {
	}

	login() {
		if (this.username === 'admin' && this.password === 'admin') {
			this.authenticationService.login();
			this.loginEvent.emit(true);
			this.router.navigate(['/orders']);
		}
	}
}
