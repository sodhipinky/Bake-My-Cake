import {TestBed} from '@angular/core/testing';
import {CanDeactivateFn} from '@angular/router';

import {preventGuard} from './prevent.guard';

describe('preventGuard', () => {
	const executeGuard: CanDeactivateFn = (...guardParameters) =>
		TestBed.runInInjectionContext(() => preventGuard(...guardParameters));

	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	it('should be created', () => {
		expect(executeGuard).toBeTruthy();
	});
});
