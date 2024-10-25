import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-next-dialog',
  templateUrl: './next-dialog.component.html',
  styleUrls: ['./next-dialog.component.css'],
})
export class NextDialogComponent implements OnInit {
  selected: Date | null | undefined;

  secondformData = {}
  report: any = [];
  vehicles: any = [];
  mails: any = [];
  setTime: any;
  timeValue: any;
  schedule_time: any;
  checkedWeekly: boolean = false;
  checkedWeekly2: boolean = false;
  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  weeks: any;
  checkedMonthly: boolean = false;
  checkedQuarterly: boolean = false;
  checkedYearly: boolean = false;
  time_interval_lastDate: any;
  time_interval_firstDate: any;

  isChecked = true;

  pickDateQ= false;
  pickDateY= false;
  currentDate = new Date();
  endDate:any;
  startDate:any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,private matDialog: MatDialog
  ) {
    
  }
  ngOnInit() {
    console.log(this.days);
    this.extractData();
    this.setTime = this.fb.group({
      scheduleTime: '',
      toggle_midday:'',
      scheduleInterval: '',
      slideToggle: '',


    });
    this.setTiming();
    this.handleRadioChange();
    this.weeks = [...this.days];

    // console.log(this.data.report_type);
    // console.log(this.data.vehicles);
    // console.log(this.data.mailed);
  }
  extractData() {
    this.mails = this.data.mailed;
    for (let i in this.data.report_type) {
      if (this.data.report_type[i] === true) {
        this.report.push(i);
      }
    }
    this.data.vehicles.map((obj: any) => {
      this.vehicles.push(obj.lob_name);
    });
    this.vehicles = this.vehicles.join(', ');
    this.report = this.report.join(', ');
    this.mails = this.mails.join(', ');
    // console.log(this.vehicles)
    // console.log(this.report)
    // console.log(this.mails)
  }
  setTiming() {
    this.timeValue = new Date();
    this.schedule_time = this.timeValue.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).replace(/\s?(AM|PM)/i, '');
    this.setTime.controls['scheduleTime'].setValue(this.schedule_time);
    // this.schedule_time = this.schedule_time.replace(' am', '');
    // console.log(this.schedule_time);
  }

  timeDec() {
    // console.log('Time Clicked');
    this.timeValue.setMinutes(this.timeValue.getMinutes() - 10);
    this.schedule_time = this.timeValue.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).replace(/\s?(AM|PM)/i, '');
    // this.schedule_time = this.schedule_time.replace(' am', '');
    console.log(this.timeValue);
    console.log(this.schedule_time);
  }

  timeInc() {
    console.log('Time Clicked');
    this.timeValue.setMinutes(this.timeValue.getMinutes() + 10);
    this.schedule_time = this.timeValue.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).replace(/\s?(AM|PM)/i, '');
    // this.schedule_time = this.schedule_time.replace(' am', '');
    console.log(this.timeValue);
    console.log(this.schedule_time);
  }

  handleRadioChange() {
    
    this.setTime.get('slideToggle').valueChanges.subscribe((value: boolean) => {
      console.log(this.setTime.value);

      if (value === true) {
        console.log('toogle true Checked');
        
        this.weeks.splice(5, 2);
        console.log(this.weeks);
      }
      if (value === false) {
        console.log('toogle false Checked');
        this.weeks = [...this.days];
        console.log(this.days);
        console.log(this.weeks);
      }
    });

    this.setTime
      .get('scheduleInterval')
      .valueChanges.subscribe((value: string) => {
        this.resetAllChecks();

        switch (value) {
          case 'Weekly':
            this.checkedWeekly = true;
            break;
          case 'Every 2 weeks':
            this.checkedWeekly2 = true;
            break;
          case 'Monthly':
            this.checkedMonthly = true;
            break;
          case 'Quarterly':
            this.checkedQuarterly = true;
            break;
          case 'Yearly':
            this.checkedYearly = true;
            break;
          default:
            this.resetAllChecks();
            break;
        }
      });
  }

  resetAllChecks() {
    this.checkedWeekly = false;
    this.checkedWeekly2 = false;
    this.checkedMonthly = false;
    this.checkedQuarterly = false;
    this.checkedYearly = false;
    this.pickDateQ = false;  
    this.pickDateY = false;
  }

  selectDay(i:any){

    this.setTime.get('scheduleInterval').setValue(this.days[i])
    console.log(this.setTime.value)

  }
  getLastDay() {
    const date = new Date();
    date.setMonth(date.getMonth() + 4);
    // console.log(date);

    const month = date.getMonth();
    const year = date.getFullYear();

    // console.log(month);
    // console.log(year);
    const day = new Date(year, month + 1, 0).getDate();
    const lastDate = new Date(year,month,day)
    console.log(lastDate);
    this.time_interval_lastDate = lastDate
    this.setTime.get('scheduleInterval').setValue(this.time_interval_lastDate.toISOString().split('T')[0])
  }
  getFirstDay() {
    const date = new Date();
    date.setMonth(date.getMonth() + 4);
    // console.log(date);

    const month = date.getMonth();
    const year = date.getFullYear();

    // console.log(month);
    // console.log(year);
    const day = new Date(year, month + 1, 0).getDate();
    const lastDate = new Date(year,month,day)
    lastDate.setDate(lastDate.getDate()+1)
    const firstDate = new Date(lastDate)
    console.log(lastDate);
    this.time_interval_firstDate = lastDate
    this.setTime.get('scheduleInterval').setValue(this.time_interval_firstDate.toISOString().split('T')[0])
  }
  getCustomDay() {
      this.pickDateQ = true
      this.setTime.get('scheduleInterval').setValue(this.selected)
  }
  getLastYear(){
    const currdate = new Date()
    const year = currdate.getFullYear()

    this.endDate = new Date(year,11,31).toISOString().split('T')[0]
    this.setTime.get('scheduleInterval').setValue(this.endDate)
    console.log(this.endDate)


  }
  getFirstYear(){
    const currdate = new Date()
    const year = currdate.getFullYear()

    this.startDate = new Date(year+1,0,1).toISOString().split('T')[0]
    this.setTime.get('scheduleInterval').setValue(this.startDate)
    console.log(this.startDate)
  }
  getCustomYear(){
      this.pickDateY =true
      this.setTime.get('scheduleInterval').setValue(this.selected)
  }



  done(){
    this.secondformData = {
      veh:this.vehicles,
      rep:this.report,
      mail:this.mails,
      schedule:this.setTime.value
     }
     localStorage.setItem('secondForm', JSON.stringify(this.secondformData));
     
    this.matDialog.open(ConfirmBoxComponent,{
      width: '565px',
      
      data: this.secondformData

  })
}
}
