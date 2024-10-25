import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScheduleReportComponent } from './schedule-report/schedule-report.component';
import { NextDialogComponent } from './next-dialog/next-dialog.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'', redirectTo: 'login' ,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'schedule' , component: ScheduleReportComponent},
  {path:'test' ,component:TestComponent}
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})
export class AppRoutingModule { }
