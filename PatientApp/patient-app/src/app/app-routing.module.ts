import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminComponent } from './component/admin/admin.component';
import { PatientComponent } from './component/patient/patient.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PatientDashboardComponent } from './component/patient/patient-dashboard/patient-dashboard.component';
import { DoctorListComponent } from './component/patient/doctor-list/doctor-list.component';
import { PatientHistoryComponent } from './component/patient/patient-history/patient-history.component';
import { DoctorDashboardComponent } from './component/doctor/doctor-dashboard/doctor-dashboard.component';
import { PatientRequestComponent } from './component/doctor/patient-request/patient-request.component';
import { DoctorDetailComponent } from './component/doctor/doctor-detail/doctor-detail.component';
import { UserProfileComponent } from './component/patient/user-profile/user-profile.component';
import { DoctorProfileComponent } from './component/doctor/doctor-profile/doctor-profile.component';
import { EditProfileComponent } from './component/patient/user-profile/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },

  { path: 'patient', component: PatientComponent, children: [
        {path: 'home', component: PatientDashboardComponent},
        {path: 'doctor-list', component: DoctorListComponent},
        {path: 'history', component: PatientHistoryComponent},
        {path: 'profile', component: UserProfileComponent}
  ] },

  { path: 'doctor', component: DoctorComponent, children: [
        { path: 'dashboard', component: DoctorDashboardComponent },
        { path: 'patient-request', component: PatientRequestComponent },
        { path: 'doctor-history', component: DoctorDetailComponent },
        { path: 'profile', component: DoctorProfileComponent }
  ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
