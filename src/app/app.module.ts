import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentDetailFormComponent } from './appointment-details/appointment-detail-form/appointment-detail-form.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { SignupDetailsComponent } from './signin-details/signup-details.component';

const routes = [
  { path: '', component: HomeComponent },
  {
    path: 'app-appointment-detail-form',
    component: AppointmentDetailFormComponent,
  },
  { path: 'app-appointment-details', component: AppointmentDetailsComponent },
  { path: 'app-login-details', component: LoginDetailsComponent },
  { path: 'app-signup-details', component: SignupDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppointmentDetailsComponent,
    AppointmentDetailFormComponent,
    HomeComponent,
    NavComponent,
    LoginDetailsComponent,
    SignupDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
