import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeoutError } from 'rxjs';
import { DatajsonService } from '../datajson.service';
import { MatDialog } from '@angular/material/dialog';
import { NextDialogComponent } from '../next-dialog/next-dialog.component';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css'],
})
export class DialogboxComponent implements DoCheck,OnInit {
  showEmailField: boolean = false;
  cancelEmailBtn: boolean = false;
  addEmailBtn: boolean = true;
  addEmailBox: boolean = false;
  checklists: any;
  isVisible:boolean = false
  jsondata:any
  email_list: any = [];
  emails: any;
  checklist_value:any
  filterOption:any
  filter_data:any 
  vehicleChecked:any=[]
  passedData:any = []

  error_message=false
   
  firstFormData={}

  constructor(private fb: FormBuilder,public service:DatajsonService,private matDialog:MatDialog) {
    this.checklists = this.fb.group({
      FleetWise: true,
      VehicleWise: '',
      TripWise: '',
      DrivingWise: '',
    });   
    this.emails = this.fb.group({
      email: ['dummy@gmail.com', [Validators.email,Validators.required]],
    });
    this.filterOption = this.fb.group({
      filterSelect:['All Vehicle'],
      filterText:''
     
    })
    
  }
   
  
  ngOnInit(): void {
    this.show()
    
  } 
  handleSearch(){
    this.filterOption.get('filterText').valueChanges.subscribe((val:string)=>{
    
        })
   
   
    }
    
 
  show() {
     this.service.getData().subscribe(
      (data:any)=>{
        this.jsondata = data ;
      }

     )
  }

 

  ngDoCheck(){
    // console.log("onchanges")
    this.selectVehicle() 
     
  }
  selectVehicle(){
    this.filter_data = this.jsondata
    this.checklist_value = this.checklists.value
    if(this.checklist_value.FleetWise===true && this.checklist_value.VehicleWise){
      
      // console.log(this.checklist_value,'from selectVehicle function')
      this.isVisible = true
      if(this.isVisible){
        this.perform_filterSelection()
        this.perform_filterText()

      }
      // this.perform_filter(this.filterOption)


    }
    else{
      this.isVisible=false
    }
    

  }


  perform_filterSelection(){
      const select = this.filterOption.value
      // console.log(select.filterSelect)
      if(select.filterSelect==='All Vehicle' || select.filterSelect==='' ){
        return 
      }
      this.filter_data = this.filter_data.filter((obj:any)=>{    
        return obj.branch===select.filterSelect
      })
    }
    perform_filterText(){
      const text = this.filterOption.value
      if(text===''){
        return
      }
      
        this.filter_data = this.filter_data.filter((obj:any)=>{  
          // console.log("filtering...")  
          return obj.vin.toLowerCase().includes(text.filterText.toLowerCase())
      // console.log(text.filterText)
    })
     

    }

 

  openEmail() {
    this.showEmailField = this.showEmailField ? false : true;
    this.cancelEmailBtn = this.cancelEmailBtn ? false : true;
    this.addEmailBtn = this.addEmailBtn ? false : true;
  }
  clearEmail() {
    // this.email_list=[];
    this.showEmailField = this.showEmailField ? false : true;
    this.cancelEmailBtn = this.cancelEmailBtn ? false : true;
    this.addEmailBtn = this.addEmailBtn ? false : true;
    this.error_message =false;
    this.emails.get('email').value=''

  }


  addEmail(mail: any) {

    if(!(this.email_list.length<5)){
      this.error_message = true
    }
    
    if (this.emails.valid && mail.email && this.email_list.length<5) {  
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
       this.error_message=false
        console.log(this.email_list)
  }

  vehicle(event:any , data:any,i:any){
    console.log("I'm in check box")
    console.log(data)
    console.log(event.checked)
      if(event.checked){
        this.vehicleChecked.push(data)
      }else{
        this.vehicleChecked.splice(i,1)
      }
      
    //   console.log(this.vehi
    
  }

  isNext():boolean{
    // console.log(this.email_list.length)
    // console.log(this.vehicleChecked.length) 
    if(this.email_list.length>0 && this.vehicleChecked.length>0 && this.isVisible === true){
        return false
    }
    return true
  }

  next(){
    this.firstFormData = {
      report_type: this.checklist_value,
      vehicles: this.vehicleChecked,
      mailed: this.email_list
    }
    localStorage.setItem('firstFrom', JSON.stringify(this.firstFormData));
    this.matDialog.open(NextDialogComponent,{
      width: '565px',
      
      data: this.firstFormData

    })
  }
}
