import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  user:any;
  edu:any;
  constructor(private router:Router,private userService:UserService) {
    
    this.getData();
   }
  
   getData()
   {
     let data = sessionStorage.getItem('userId');
     console.log("user id : "+sessionStorage.getItem('userId'));

    this.userService.displayResume(data).subscribe((res)=>{
     console.log(res);
     this.user=res;
     this.edu = this.user.candidate.education;
     console.log(this.edu);
     
     //console.log(res['user.Candidate']);
    })
  }
  gotoCandidate(){
    this.router.navigate(['candidate']);
  }
  ngOnInit() {
  }

}
