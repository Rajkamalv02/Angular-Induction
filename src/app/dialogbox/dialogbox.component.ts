import { Component, DoCheck, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeoutError } from 'rxjs';
import { DatajsonService } from '../datajson.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css'],
})
export class DialogboxComponent implements DoCheck {
  showEmailField: boolean = false;
  cancelEmailBtn: boolean = false;
  addEmailBtn: boolean = true;
  addEmailBox: boolean = false;
  checklists: any;
  isVisible:boolean = false
 
  email_list: any = [];
  emails: any;
  checklist_value:any

  constructor(private fb: FormBuilder,public service:DatajsonService) {
    this.checklists = this.fb.group({
      FleetWise: '',
      VehicleWise: '',
      TripWise: '',
      DrivingWise: '',
    });   
    this.emails = this.fb.group({
      email: ['', [Validators.email]],
    });

    console.log(this.checklists.value);
  }

  ngDoCheck(){
    console.log("onchanges")
    this.selectVehicle()
  }
  selectVehicle(){

    
    this.checklist_value = this.checklists.value
    
    if(this.checklist_value.FleetWise===true && this.checklist_value.VehicleWise){
      console.log(this.checklist_value,'from selectVehicle function')
      this.isVisible = true
    }
  }


  show() {
   const data= this.service.getData() ;
   console.log(data)
  }

  openEmail() {
    this.showEmailField = this.showEmailField ? false : true;
    this.cancelEmailBtn = this.cancelEmailBtn ? false : true;
    this.addEmailBtn = this.addEmailBtn ? false : true;
  }
  clearEmail() {
    this.email_list.reset();
    this.showEmailField = this.showEmailField ? false : true;
    this.cancelEmailBtn = this.cancelEmailBtn ? false : true;
    this.addEmailBtn = this.addEmailBtn ? false : true;
  }


  addEmail(mail: any) {
    if (this.emails.valid && mail.email) {  
      console.log('Received mail:', mail.email);
      this.email_list.push(mail.email); 
      this.showEmailField = false; 
      this.cancelEmailBtn = false; 
      this.addEmailBtn = true;     
      console.log('The list:', this.email_list);     
      this.emails.reset();
      this.addEmailBox = true;
    }
  }
  

  remove(i:any){
       this.email_list.splice(i,1)
        console.log(this.email_list)
  }
}
