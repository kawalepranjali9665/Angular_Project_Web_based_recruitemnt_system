import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-personal',
  templateUrl: './update-personal.component.html',
  styleUrls: ['./update-personal.component.css']
})
export class UpdatePersonalComponent implements OnInit {

  candidate;
  user_id;
    constructor(private candidateService:CandidateService,private router:Router) { }
  
    update()
    {
      this.user_id = sessionStorage['userId'];
      this.candidateService.update(this.user_id,this.candidate).subscribe((res)=>{
        console.log("updated data : "+res);
        this.router.navigate(['candidate']);
      })
    }
  
    ngOnInit() {
      this.user_id = sessionStorage['userId'];
      this.candidateService.getCandidateDetails(this.user_id).subscribe((res)=>{
        console.log(res);
        this.candidate=res;
      })
    }
}
