import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { FoodPage } from './pages/food/food.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'search/:term',
    component: HomePage,
  },
  {
    path: 'food/:id',
    component: FoodPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
