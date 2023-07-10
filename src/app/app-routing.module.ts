import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductViewComponent} from "./components/product-view/product-view.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {LoginComponent} from "./components/login/login.component";
import {OrderViewComponent} from "./components/order-view/order-view.component";
import {authGuard} from "./services/auth.guard";
import {preventGuard} from "./services/prevent.guard";

const routes: Routes = [
	{
		path: 'products',
		component: ProductViewComponent
	},
	{
		path: 'products/:id',
		component: ProductDetailComponent,
		canDeactivate: [preventGuard]
	},
	{
		path: 'checkout/:id/:quantity',
		component: CheckoutComponent,
		canDeactivate: [preventGuard]
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'orders',
		component: OrderViewComponent,
		canActivate: [authGuard]
	},
	{
		path: '',
		redirectTo: 'products',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
