import {Component} from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	public static isLoggedIn: boolean = false;
	username: string = '';
	password: string = '';

	login() {
		LoginComponent.isLoggedIn = this.username === 'admin' && this.password === 'admin';
	}
}
