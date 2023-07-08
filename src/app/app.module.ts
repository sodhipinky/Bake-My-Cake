import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {ProductViewComponent} from './components/product-view/product-view.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ProductCardComponent} from './components/product-card/product-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {FilterProductComponent} from './components/filter-product/filter-product.component';
import {MatSelectModule} from "@angular/material/select";
import {SearchProductComponent} from './components/search-product/search-product.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRippleModule} from "@angular/material/core";
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ProductViewComponent,
		ProductCardComponent,
		FilterProductComponent,
		SearchProductComponent,
		ProductDetailComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatCardModule,
		MatDividerModule,
		MatSelectModule,
		MatFormFieldModule,
		MatInputModule,
		MatRippleModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
