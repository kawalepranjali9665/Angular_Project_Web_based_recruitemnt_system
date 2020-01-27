import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { CandidateComponent } from './candidate/candidate.component';
import { EmployerComponent } from './employer/employer.component';
import { EducationComponent } from './education/education.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PersonalComponent } from './personal/personal.component';
import { ResumeComponent } from './resume/resume.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AddjoblistComponent } from './addjoblist/addjoblist.component';
import { CompanydetailComponent } from './companydetail/companydetail.component';
import { SearchedjobComponent } from './searchedjob/searchedjob.component';
import { UpdatePersonalComponent } from './update-personal/update-personal.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    SearchComponent,
    FooterComponent,
    ForgotComponent,
   
    NewpasswordComponent,
    CandidateComponent,
    EmployerComponent,
    EducationComponent,
    AboutusComponent,
    PersonalComponent,
    ResumeComponent,
    AddcompanyComponent,
    AddjoblistComponent,
    CompanydetailComponent,
    SearchedjobComponent,
    UpdatePersonalComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"aboutus",component:AboutusComponent},
      {path:"register",component:RegisterComponent},
      {path:"login",component:LoginComponent},
      {path:"admin",component:AdminComponent},
      {path:"employer",component:EmployerComponent},
      {path:"addcompany",component:AddcompanyComponent},
      {path:"addjoblist",component:AddjoblistComponent},
      {path:"candidate",component:CandidateComponent},
      {path:"personal",component:PersonalComponent},
      {path:"education",component:EducationComponent},
      {path:"resume",component:ResumeComponent},
      {path:"search",component:SearchComponent},
      {path:"forgot",component:ForgotComponent},
      {path:"newpass",component:NewpasswordComponent},
      {path:"cmpdetails",component:CompanydetailComponent},
      {path:"searchedjob",component:SearchedjobComponent},
      {path:"updateProfile",component:UpdatePersonalComponent},
      {path:"contactus",component:ContactusComponent}
   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
