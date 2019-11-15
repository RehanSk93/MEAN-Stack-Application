import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './form-component/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form-component/reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-component/form-array/form-array.component';
import { TestComponent } from './form-component/test/test.component';

const routes: Routes = [
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: '/template-driven-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
