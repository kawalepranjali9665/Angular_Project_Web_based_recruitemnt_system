import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  msg:string;
  flag:boolean;
    constructor(public userservice:UserService,public router:Router) { }
  
    ngOnInit() {
    }
    updatepass(data)
    {
      console.log(data);
      this.userservice.setpass(data).subscribe((result)=>{
        console.log(result);
        if(result){
          this.msg="suucessfully changed password";
          this.flag=true;
          this.router.navigate(['login']);
        }
        else{
          this.flag=false
          this.msg="Enter valid OTP";
        }
      })
      console.log(data);
    }
  
    navigate()
    {
      this.router.navigate(['login']);
    }

}
