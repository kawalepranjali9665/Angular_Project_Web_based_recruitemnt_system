import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  cand:any;
  msg:any;
  photo:any;
  user:any;
  constructor(private userService:UserService, 
    private router:Router) {
      if(sessionStorage['userId']==undefined)
    {
      this.router.navigate(['login']);
    }
     }
    onSelectFile(event) {
      this.photo = event.target.files[0];
  }

  //code without image commented at 11.12am
  addCand(CandForm)
  {
    console.log(CandForm.form.value);
    
    this.cand=CandForm.form.value;
    
    let data = {
     
      "age":CandForm.form.value.age,
      "address":CandForm.form.value.address,
      "gender":CandForm.form.value.gender,
      "pTitle":CandForm.form.value.pTitle,
      "pDesc":CandForm.form.value.pDesc,
      "objective":CandForm.form.value.objective,
      "photo":CandForm.form.value.photo,
      "user":{"userId":sessionStorage.getItem('userId')}
    }  
    console.log(this.cand);
    this.userService.personal(data).subscribe((res)=>{
      sessionStorage['resumeId']=res;
      alert(res);
      this.msg="Record added succesfully";
      this.router.navigate(['education']);
    },(error)=>{   
    
      alert("some thing wrong");
    })
      
  }


//code for Adding image uncommented at 11.13am today

 
  ngOnInit() {
  }

}


