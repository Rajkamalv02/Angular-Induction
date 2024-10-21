import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-schedule-report',
  templateUrl: './schedule-report.component.html',
  styleUrls: ['./schedule-report.component.css']
})
export class ScheduleReportComponent {
  constructor(public dialogbox:MatDialog){}

  OpenDialogBox(){
    this.dialogbox.open(DialogboxComponent,{
      width: '565px',
      height:'514px'

    })
  }
}
