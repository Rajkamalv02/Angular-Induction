import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css'],
})
export class DialogboxComponent {
  showEmailField: boolean = false;
  cancelEmailBtn: boolean = false;
  addEmailBtn: boolean = true;
  addEmailBox: boolean = false;
  checklists: any;
  object_of_mails: any = [];
  email_list: any = [];
  emails: any;
  constructor(private fb: FormBuilder) {
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

  show() {
    console.log(this.checklists.value);
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
