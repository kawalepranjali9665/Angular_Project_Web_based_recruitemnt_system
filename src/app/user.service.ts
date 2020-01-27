import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http:HttpClient) { }

  register(user)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/register",user);
  }
  login(user)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/login",user);

  }
  forgot(user)
  {
    console.log("hi"+user);
    return this.http.get("http://localhost:8080/DacAug19/user/forgot?em="+user);

  }
  setpass(data)
  {
    console.log(data)
    return this.http.post("http://localhost:8080/DacAug19/user/setpass/",data);
  }
  getAllUser()
  {
    return this.http.get("http://localhost:8080/DacAug19/admin");
  }
  delete(userId)
  {
    console.log(userId);
    return this.http.get("http://localhost:8080/DacAug19/admin/"+userId);
  }
  education(candidate)
  { 
    console.log(candidate)
    return this.http.post("http://localhost:8080/DacAug19/candidate/addedu",candidate)
  }
  
  personal(data)
  {
    console.log(data);
    return this.http.post("http://localhost:8080/DacAug19/candidate/addcand",data);
  }
  addskill(cand)
  {   
    return this.http.post("http://localhost:8080/DacAug19/candidate/addskill",cand);
  }
  displayResume(data)
  {
    return this.http.get("http://localhost:8080/DacAug19/candidate/resume?user_id="+data);   
  }
}
