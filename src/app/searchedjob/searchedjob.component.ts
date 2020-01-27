import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchedjob',
  templateUrl: './searchedjob.component.html',
  styleUrls: ['./searchedjob.component.css']
})
export class SearchedjobComponent implements OnInit {
  result: any;
  user:any;
  constructor(private candService:CandidateService,private router:Router) { 
console.log(sessionStorage.getItem('profile'));
let data1=sessionStorage.getItem('profile');
let data2=sessionStorage.getItem('location')
  console.log("searchedjob  : "+data1);
  console.log("searchedjob  : "+data2);
    this.candService.Search(data2,data1).subscribe((res)=>{       
      console.log(res);
      this.result=res;
       if(res[0] != null)
       {
       this.router.navigate(['searchedjob']);
       }
       else
       {
         alert("jobs not available for this inputs...!!!");
        this.router.navigate(['search']);
       }
     }),(error)=>{
       alert("not searched");
     } 
  }
  Apply(jobId)
  {
   if(sessionStorage.type!="CANDIDATE")
   {
     this.router.navigate(['login']);
   }
    let data={
      "user":{"userId":sessionStorage.getItem("userId")},
      "joblist":{"jobId":jobId}
    }
    console.log(data);
    this.candService.ApplyJob(data).subscribe(res=>{
      alert("applied succesfully..");
      console.log(res);
      this.router.navigate['searchedjob'];
    })   
   } 

  ngOnInit() {
  }


}
