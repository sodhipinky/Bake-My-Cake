import {Component, inject, Input} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	@Input()
	loggedIn: boolean = false;

	private breakpointObserver = inject(BreakpointObserver);
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches),
			shareReplay()
		);

	constructor(private authenticationService: AuthenticationService,
				private router: Router) {
	}

	loginEvent($event: any) {
		this.loggedIn = this.authenticationService.isLoggedIn;
	}

	logout() {
		this.authenticationService.logout();
		// this.loggedIn = this.authenticationService.isLoggedIn;
		this.router.navigate(['/login']);
	}
}
