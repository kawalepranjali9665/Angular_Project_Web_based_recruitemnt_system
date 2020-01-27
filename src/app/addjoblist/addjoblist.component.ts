import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjoblist',
  templateUrl: './addjoblist.component.html',
  styleUrls: ['./addjoblist.component.css']
})
export class AddjoblistComponent implements OnInit {

  jobs:any;
  constructor(private empService:EmployerService,
    private router:Router ) {}

  addJoblist(JobList)
  {
    console.log(JobList.form.value);
    this.jobs = JobList.form.value;

    let data = {
      "jobProfile":JobList.form.value.jobProfile,
      "jobDesc":JobList.form.value.jobDesc,
      "interviewDate":JobList.form.value.interviewDate,
      "interviewTime":JobList.form.value.interviewTime,
      "noOfVacancies":JobList.form.value.noOfVacancies,
      "salary":JobList.form.value.salary,
      "location":JobList.form.value.location,
      "employer":{"companyId":sessionStorage.getItem('companyId')}
    }
    this.empService.jobDetails(data).subscribe((res)=>{
      this.router.navigate(['employer']);
    },(error)=>{  
      alert("joblist not added");   
    })
  }
  gotoEmployer(){
    this.router.navigate(['employer']);
  }
  ngOnInit() {
  }

}
