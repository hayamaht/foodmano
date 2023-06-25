import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from './shared/prime/prime.module';
import { HeaderComponent } from './components/header/header.component';
import { HomePage } from './pages/home/home.page';
import { SearchComponent } from './components/search/search.component';
import { FoodPage } from './pages/food/food.page';
import { TagsComponent } from './components/tags/tags.component';
import { CartPage } from './pages/cart/cart.page';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePage,
    SearchComponent,
    FoodPage,
    TagsComponent,
    CartPage,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    PrimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
