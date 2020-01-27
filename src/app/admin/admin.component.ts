import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admin:any;
  constructor(private router:Router,private userService:UserService) {
    if(sessionStorage['userId']==undefined)
    {
      this.router.navigate(['login']);
    }
    this.getData();
   }
   getData(){
     this.userService.getAllUser().subscribe((res)=>{
      console.log(res);
      this.admin=res;
     })
   }
   delete(userId){
    console.log(userId);    
      this.userService.delete(userId).subscribe((res)=>{
        console.log("deleted....");
        alert("deleted"); 
        this.getData();
        this.router.navigate['admin'];        
      }),(error)=>{
        alert("can't delete users,on that,students applied for jobs");
      }
  }
  ngOnInit() {
  }

}
