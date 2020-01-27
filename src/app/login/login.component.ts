import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EmtrService } from '../emtr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string;
  constructor(private userService:UserService,private router:Router
    ,private emService:EmtrService) { }
  
  login(loginForm)
  {
    console.log(loginForm);
    let data=loginForm.form.value;
    console.log(data);
    this.userService.login(data).subscribe(res=>{
      console.log(data);
    sessionStorage['userId']=res['userId'];
    if(res['type']=='ADMIN')
    {
      sessionStorage['type']=res['type'];
       this.router.navigate(['admin']);     
    }
    else if(res['type']=='CANDIDATE') 
    {
      sessionStorage['type']=res['type'];
      this.router.navigate(['candidate']);
    }
    else if(res['type']=='EMPLOYER') 
    {
      sessionStorage['type']=res['type'];
      this.router.navigate(['employer']);
    }
    
    this.emService.logInBtnSwitch(true);
  
    },(error)=>{
      alert("something went wrong");
    }
    )
  }
  ngOnInit() {
  }

}
