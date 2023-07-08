import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductViewComponent} from "./components/product-view/product-view.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";

const routes: Routes = [
	{
		path: 'products',
		component: ProductViewComponent
	},
	{
		path: 'products/:id',
		component: ProductDetailComponent
	},
	{
		path: '',
		redirectTo: 'products',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
