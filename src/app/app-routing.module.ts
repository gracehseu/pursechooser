import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';


export const routes: Routes = [
  {
    path: "Chanel | Hermes | Celine",
    component: BrandDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
