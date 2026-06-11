import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { APIProductPagePageRoutingModule } from './apiproduct-page-routing.module';

import { APIProductPagePage } from './apiproduct-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    APIProductPagePageRoutingModule
  ],
  declarations: [APIProductPagePage]
})
export class APIProductPagePageModule {}
