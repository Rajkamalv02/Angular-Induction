import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './materials/materials.module';
import { ScheduleReportComponent } from './schedule-report/schedule-report.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { HttpClientModule } from '@angular/common/http';
import { NextDialogComponent } from './next-dialog/next-dialog.component';
import { ConfirmBoxComponent } from './confirm-box/confirm-box.component';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScheduleReportComponent,
    DialogboxComponent,
    NextDialogComponent,
    ConfirmBoxComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialsModule,
    HttpClientModule,
    FormsModule,
   
   
 
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
