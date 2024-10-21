import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './materials/materials.module';
import { ScheduleReportComponent } from './schedule-report/schedule-report.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScheduleReportComponent,
    DialogboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialsModule,
   
 
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
