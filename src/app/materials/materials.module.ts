import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';



const Materials =[
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  MatIconModule,
  MatCheckboxModule
  

  

]



@NgModule({
 
  imports: [ Materials ],
  exports:[Materials]
})
export class MaterialsModule { }
