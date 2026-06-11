import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'apiproduct-page',
    pathMatch: 'full'
  },
  {
    path: 'ts-exercise',
    loadChildren: () => import('./ts-exercise/ts-exercise.module').then( m => m.TsExercisePageModule)
  },
  {
    path: 'find-exercise',
    loadChildren: () => import('./find-exercise/find-exercise.module').then( m => m.FindExercisePageModule)
  },
  {
    path: 'call-apiexercise',
    loadChildren: () => import('./call-apiexercise/call-apiexercise.module').then( m => m.CallAPIExercisePageModule)
  },
  {
    path: 'apiproduct-page',
    loadChildren: () => import('./apiproduct-page/apiproduct-page.module').then( m => m.APIProductPagePageModule)
  },
  {
    path: 'cartpage',
    loadChildren: () => import('./cartpage/cartpage.module').then( m => m.CartpagePageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
