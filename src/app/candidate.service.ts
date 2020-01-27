import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  

  constructor(private http:HttpClient) { }

  ApplyJob(data)
  {
    return this.http.post("http://localhost:8080/DacAug19/candidate/apply/",data);    
  }
  Search(data2,data1)
  {
    //console.log(data.location,data.jobProfile);
    return this.http.get("http://localhost:8080/DacAug19/candidate/search?location="+data2+"&jobProfile="+data1);    
  }
  getCandidateDetails(user_id)
  {
    return this.http.get("http://localhost:8080/DacAug19/candidate/getcand/"+user_id);
  }

  update(user_id,candidate)
  {
    return this.http.put("http://localhost:8080/DacAug19/candidate/"+user_id,candidate);
  }
}
