import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './form-component/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form-component/reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-component/form-array/form-array.component';
import { TestComponent } from './form-component/test/test.component';
import { CompleteFormComponent } from './form-component/template-driven-form/complete-form/complete-form.component';
import { CustomValidationComponent } from './form-component/template-driven-form/custom-validation/custom-validation.component';
import { ReactiveCompleteFormComponent } from './form-component/reactive-form/reactive-complete-form/reactive-complete-form.component';
// tslint:disable-next-line: max-line-length
import { ReactiveCustomValidationComponent } from './form-component/reactive-form/reactive-custom-validation/reactive-custom-validation.component';
import { TdfSimpleValidationComponent } from './form-component/template-driven-form/tdf-simple-validation/tdf-simple-validation.component';
// tslint:disable-next-line: max-line-length
import { TdfNestedFormValidationComponent } from './form-component/template-driven-form/tdf-nested-form-validation/tdf-nested-form-validation.component';
// tslint:disable-next-line: max-line-length
import { PasswordMatchValidationComponent } from './form-component/template-driven-form/password-match-validation/password-match-validation.component';

const routes: Routes = [

  // Template driven form path details
  { path: 'template-driven-form', component: TemplateDrivenFormComponent, children: [
      { path: 'tdf-complete-form-details', component: CompleteFormComponent },
      { path: 'tdf-custom-validation', component: CustomValidationComponent },
      { path: 'tdf-nested-form-validation', component: TdfNestedFormValidationComponent },
      { path: 'tdf-password-match-validation', component: PasswordMatchValidationComponent },
      { path: 'tdf-simple-validation', component: TdfSimpleValidationComponent }
  ] },

  // Reactive form path details
  { path: 'reactive-form', component: ReactiveFormComponent, children: [
      { path: 'reactive-complete-form-details', component: ReactiveCompleteFormComponent },
      { path: 'reactive-custom-validation', component: ReactiveCustomValidationComponent }
  ] },

  // Form array path details
  { path: 'form-array', component: FormArrayComponent },

  // Others details
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: '/template-driven-form/tdf-complete-form-details', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
