import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindExercisePage } from './find-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: FindExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindExercisePageRoutingModule {}
