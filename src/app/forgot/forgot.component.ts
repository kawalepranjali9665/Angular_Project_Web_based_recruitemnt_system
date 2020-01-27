import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  msg;
  name:any;
  constructor(private userService:UserService,
    private router:Router) { }

    getotp(data)
    {
      console.log(data);
      this.userService.forgot(data).subscribe((result:string)=>{
        this.msg="change pass";
        console.log(this.msg);
      },
      error=>{ 
        if(error.status===200){
        this.router.navigate(['newpass']);
      }
      else{
        this.msg="enter valid email"
        }
      })
    }
  
  ngOnInit() {
  }

}
