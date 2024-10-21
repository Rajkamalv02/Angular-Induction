import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatajsonService{
  dataset_observable = new Observable<any>
  dataset:any
  dataUrl = '../assets/jsondata.json'
  constructor(private http:HttpClient ) {
      this.dataset_observable = this.http.get(this.dataUrl)
      
   }

    getData(){
        this.dataset_observable.subscribe(
          (data)=>{
           this.dataset = data
          }
        )

        return this.dataset
    }
   
 
}
