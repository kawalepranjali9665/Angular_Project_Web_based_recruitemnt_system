import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.component.html',
  styleUrls: ['./companydetail.component.css']
})
export class CompanydetailComponent implements OnInit {
  
  user:any
  cmp:any;

  constructor(private router:Router,private emprService:EmployerService) { 

   
      let data = sessionStorage.getItem('userId');
      console.log("user id : "+sessionStorage.getItem('userId'));
      this.emprService.CompanyDetails(data).subscribe((res)=>{
      console.log(res);
      this.user=res;
      this.cmp = this.user[0].employer.joblist;
      console.log(this.cmp);
       })
   }

   gotoEmployer(){
    this.router.navigate(['employer']);
  }
 
  ngOnInit() {
  }

}
