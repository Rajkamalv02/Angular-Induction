import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';




const Materials =[
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  MatIconModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatRadioModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatSlideToggleModule


  

  

]



@NgModule({
 
  imports: [ Materials ],
  exports:[Materials]
})
export class MaterialsModule { }
