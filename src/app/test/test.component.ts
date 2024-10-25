import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
      
      myFilter = (d: Date | null): boolean => {
        const day = (d || new Date()).getDay();
        return day !== 0 && day !== 6;
      };
  

  };

