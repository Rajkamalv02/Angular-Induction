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
  object_of_mails: any = [];
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

  addEmail(email: any) {
    console.log('received mail:', email);
    this.object_of_mails.push(email);
    this.showEmailField = this.showEmailField ? false : true;
    this.cancelEmailBtn = this.cancelEmailBtn ? false : true;
    this.addEmailBtn = this.addEmailBtn ? false : true;
    console.log('the list:', this.object_of_mails);

    this.email_list = this.object_of_mails.map((Obj: any) => {
      return Object.values(Obj);
    });

    console.log('the value:', this.email_list);
    if (this.emails.valid) {
      this.addEmailBox = true;
    }
  }
}
