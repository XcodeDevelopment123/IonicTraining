import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsExercisePageRoutingModule } from './ts-exercise-routing.module';

import { TsExercisePage } from './ts-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsExercisePageRoutingModule
  ],
  declarations: [TsExercisePage]
})
export class TsExercisePageModule {}
