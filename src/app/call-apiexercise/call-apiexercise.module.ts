import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallAPIExercisePageRoutingModule } from './call-apiexercise-routing.module';

import { CallAPIExercisePage } from './call-apiexercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallAPIExercisePageRoutingModule
  ],
  declarations: [CallAPIExercisePage]
})
export class CallAPIExercisePageModule {}
