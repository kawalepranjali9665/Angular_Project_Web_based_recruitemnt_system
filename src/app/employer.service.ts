import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  

  constructor(private http:HttpClient) { }


  companyDetails(data)
  {
    return this.http.post("http://localhost:8080/DacAug19/employer/addcompany",data);
  }
  jobDetails(data)
  {
    return this.http.post("http://localhost:8080/DacAug19/employer/addjobs",data); 
  }  
  CompanyDetails(x) 
  {
    return this.http.get("http://localhost:8080/DacAug19/employer/companydtls?eid="+x);
  }
  JobVacancies() 
  {
    return this.http.get("http://localhost:8080/DacAug19/employer/listofallemp");
  }
  
}
