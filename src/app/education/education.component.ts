import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private userService:UserService, 
    private router:Router) { }

  eduction(myForm){
    
    let edu = myForm.form.value;
    console.log(myForm.form.value);
    let data = {
      "exam":myForm.form.value.exam,
      "percentage":myForm.form.value.percentage,
      "passYear":myForm.form.value.passYear,
      "candidate":{"resumeId":sessionStorage.getItem('resumeId')}
    }  
  this.userService.education(data).subscribe((res)=>{
    this.router.navigate(['candidate']);
  },(error)=>{  
      alert("something went wrong");      
  })
  }
   
  addAnother(myForm)
  {
   
    let data = {
      "exam":myForm.form.value.exam,
      "percentage":myForm.form.value.percentage,
      "passYear":myForm.form.value.passYear,
      "candidate":{"resumeId":sessionStorage.getItem('resumeId')}
    } 
    this.userService.education(data).subscribe((res)=>{
      alert("Education added successfully...");
      myForm.reset();
      this.router.navigate(['education']);
  
    })
  }

  gotoCandidate(){
    this.router.navigate(['candidate']);
  }

  ngOnInit() {
  }

}
