import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatajsonService{

  
  dataUrl = '../assets/jsondata.json'
  constructor(private http:HttpClient ) {}

    getData():Observable<any>{
      console.log("getData service called")
           return this.http.get(this.dataUrl)
          }    
        
    }
   
 

