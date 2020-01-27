import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
 
  emp:any;
  constructor(private router:Router,private empService:EmployerService) { }
  
  addCompany(ComanyForm)
  {
    console.log(ComanyForm.form.value);
    this.emp=ComanyForm.form.value;

    let data={
      "companyName":ComanyForm.form.value.companyName,
      "address":ComanyForm.form.value.address,
      "user":{"userId":sessionStorage.getItem('userId')}
    }
    this.empService.companyDetails(data).subscribe((res)=>{
      sessionStorage['companyId']=res;
      this.router.navigate(['addjoblist']);
    },(error)=>{
     alert("failed to adding..")
    })
  
  } gotoEmployer(){
    this.router.navigate(['employer']);
  }

  ngOnInit() {
  }

}
