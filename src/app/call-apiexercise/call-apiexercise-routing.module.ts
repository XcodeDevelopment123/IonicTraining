import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallAPIExercisePage } from './call-apiexercise.page';

const routes: Routes = [
  {
    path: '',
    component: CallAPIExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallAPIExercisePageRoutingModule {}
