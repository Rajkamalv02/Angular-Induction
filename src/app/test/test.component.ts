import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
    constructor(){
      
      const filter =() =>{
        const day = new Date().getDay();
        return day !== 0 && day !== 6;
      }
        console.log(filter)
       
    }

  };

