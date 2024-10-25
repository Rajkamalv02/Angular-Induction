import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.css']
})
export class ConfirmBoxComponent {
  allData:any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
        console.log("User details from Local Store",localStorage.getItem('user'))
        console.log("User firstForm from Local Store",localStorage.getItem('firstForm'))
        console.log("User secondForm from Local Store",localStorage.getItem('secondForm'))
  }

    sendData(){
      const user = localStorage.getItem('user')
      const firstForm = localStorage.getItem('firstForm')
      const secondForm = localStorage.getItem('secondForm')
      

    }
}
