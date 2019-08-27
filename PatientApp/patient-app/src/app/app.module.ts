import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminComponent } from './component/admin/admin.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { PatientComponent } from './component/patient/patient.component';
import { UserService } from './shared/user.service';
import { DoctorListComponent } from './component/patient/doctor-list/doctor-list.component';
import { PatientDashboardComponent } from './component/patient/patient-dashboard/patient-dashboard.component';
import { PatientHistoryComponent } from './component/patient/patient-history/patient-history.component';
import { DoctorDashboardComponent } from './component/doctor/doctor-dashboard/doctor-dashboard.component';
import { PatientRequestComponent } from './component/doctor/patient-request/patient-request.component';
import { DoctorDetailComponent } from './component/doctor/doctor-detail/doctor-detail.component';
import { UserProfileComponent } from './component/patient/user-profile/user-profile.component';
import { DoctorProfileComponent } from './component/doctor/doctor-profile/doctor-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    AdminComponent,
    DoctorComponent,
    PatientComponent,
    DoctorListComponent,
    PatientDashboardComponent,
    PatientHistoryComponent,
    DoctorDashboardComponent,
    PatientRequestComponent,
    DoctorDetailComponent,
    UserProfileComponent,
    DoctorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
