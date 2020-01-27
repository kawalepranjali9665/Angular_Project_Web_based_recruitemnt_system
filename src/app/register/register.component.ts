import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, 
    private router:Router) { }
  
  register(myForm)
  {
    let data = myForm.form.value;
    this.userService.register(data).subscribe((res)=>{
      this.router.navigate(['login']);
    },(error)=>{   
         
    })
  }
  ngOnInit() {
  }

}
