import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Form module imported
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// List of component's
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './form-component/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form-component/reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-component/form-array/form-array.component';
import { TestComponent } from './form-component/test/test.component';
import { CompleteFormComponent } from './form-component/template-driven-form/complete-form/complete-form.component';
import { CustomValidationComponent } from './form-component/template-driven-form/custom-validation/custom-validation.component';


// ngx-bootstrap files for date picker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveCompleteFormComponent } from './form-component/reactive-form/reactive-complete-form/reactive-complete-form.component';
import { ReactiveCustomValidationComponent } from './form-component/reactive-form/reactive-custom-validation/reactive-custom-validation.component';
import { TdfSimpleValidationComponent } from './form-component/template-driven-form/tdf-simple-validation/tdf-simple-validation.component';
import { TdfNestedFormValidationComponent } from './form-component/template-driven-form/tdf-nested-form-validation/tdf-nested-form-validation.component';
import { PasswordMatchValidationComponent } from './form-component/template-driven-form/password-match-validation/password-match-validation.component';
import { PasswordMatchDirective } from './form-component/template-driven-form/password-match-validation/password-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FormArrayComponent,
    TestComponent,
    CompleteFormComponent,
    CustomValidationComponent,
    ReactiveCompleteFormComponent,
    ReactiveCustomValidationComponent,
    TdfSimpleValidationComponent,
    TdfNestedFormValidationComponent,
    PasswordMatchValidationComponent,
    PasswordMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
