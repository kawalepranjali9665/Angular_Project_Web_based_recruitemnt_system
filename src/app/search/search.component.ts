import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from '../employer.service';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit 
{
 use:any;
 user:any;
  loading:any;

  jobProfile:any;
  result: Object;
  constructor(private router:Router,private emprService:EmployerService,
    private candService:CandidateService) 
  {
      this.emprService.JobVacancies().subscribe((res)=>{
      console.log(res);
      this.user=res;
      this.use=this.user;
       })
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
    onSelectFile(event) {
      this.jobProfile = event.target.jobProfile;
  }





    Searching(Search)
    {
      let data=Search.form.value;
      sessionStorage['profile']=data.jobProfile;
      sessionStorage['location']=data.location;
      
      console.log(data);
      this.router.navigate(['searchedjob']);
     
    }
  ngOnInit() {
  }

}
