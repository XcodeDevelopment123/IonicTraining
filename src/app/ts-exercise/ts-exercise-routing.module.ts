import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsExercisePage } from './ts-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: TsExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsExercisePageRoutingModule {}
