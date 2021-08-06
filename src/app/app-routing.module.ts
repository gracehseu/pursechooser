import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { SearchResultComponent } from './search-result/search-result.component';


export const routes: Routes = [
  {
    path: 'search', component: SearchResultComponent,
    // component: BrandDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // declarations: [BrandDetailComponent]

})
export class AppRoutingModule { }
