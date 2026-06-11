import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindExercisePageRoutingModule } from './find-exercise-routing.module';

import { FindExercisePage } from './find-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindExercisePageRoutingModule
  ],
  declarations: [FindExercisePage]
})
export class FindExercisePageModule {}
