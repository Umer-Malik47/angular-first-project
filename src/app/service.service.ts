import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

  URL:string = 'http://localhost:3000/programing';

  constructor(private http: HttpClient){ }

  getProduct(data:any){
   return this.http.post(this.URL,data)
   
  }

  displayData(){
   return this.http.get(this.URL)
  }

  
}

