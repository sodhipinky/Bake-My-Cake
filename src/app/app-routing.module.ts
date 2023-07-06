import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductViewComponent} from "./components/product-view/product-view.component";

const routes: Routes = [
	{
		path: 'allProducts',
		component: ProductViewComponent
	},
	{
		path: '',
		redirectTo: 'allProducts',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
