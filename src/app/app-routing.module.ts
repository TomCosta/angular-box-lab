import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxFormComponent } from './box-form/box-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'box-form', pathMatch: 'full' },
  { path: 'box-form', component: BoxFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
