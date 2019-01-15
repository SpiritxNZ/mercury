import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { SecurityGuard } from './guard/security.guard';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminTutorApplicantComponent } from './components/admin-tutor-applicant/admin-tutor-applicant.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './services/admin.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminTutorStatusComponent } from './components/admin-tutor-status/admin-tutor-status.component';

const appRoutes: Routes = [
  {
    path:'admin', component: AdminPanelComponent, canActivate: [SecurityGuard], 
    children:[
      {path:'applicants', component:AdminTutorApplicantComponent},
      {path:'tutors', component:AdminTutorStatusComponent}      
    ],
  },
  {path: 'login', component:LoginComponent },
  {path: 'index', component: HomeComponent},
  {path: '', component:HomeComponent},
  {path: '**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    AdminTutorApplicantComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AdminTutorStatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    AdminService,
    SecurityGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
