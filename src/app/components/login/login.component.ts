import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {fromEvent, Subject, takeUntil} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username: string = '';
	password: string = '';
	@Output()
	loginEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
	private unsubscriber: Subject<void> = new Subject<void>();

	constructor(private router: Router,
				private authenticationService: AuthenticationService,
				private snackbar: MatSnackBar) {
	}

	login() {
		if (this.username === 'admin' && this.password === 'admin') {
			this.authenticationService.login();
			this.loginEvent.emit(true);
			this.router.navigate(['/orders']);
		}
	}

	ngOnInit(): void {
		history.pushState(null, '');
		fromEvent(window, 'popstate').pipe(
			takeUntil(this.unsubscriber)
		).subscribe((_) => {
			history.pushState(null, '');
			this.snackbar.open('You are not allowed to go back', 'Ok', {
				duration: 3000,
				verticalPosition: 'top',
				horizontalPosition: 'center'
			});
		});
	}

	ngOnDestroy(): void {
		this.unsubscriber.next();
		this.unsubscriber.complete();
	}
}
