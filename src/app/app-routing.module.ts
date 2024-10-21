import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScheduleReportComponent } from './schedule-report/schedule-report.component';

const routes: Routes = [
  {path:'', redirectTo: 'login' ,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'schedule' , component: ScheduleReportComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})
export class AppRoutingModule { }
