import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APIProductPagePage } from './apiproduct-page.page';

const routes: Routes = [
  {
    path: '',
    component: APIProductPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APIProductPagePageRoutingModule {}
