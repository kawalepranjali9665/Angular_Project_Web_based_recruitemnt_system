import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  constructor(private router:Router) {
    if( sessionStorage.type!="EMPLOYER")
    {
      this.router.navigate(['login']);
    }
   }

  ngOnInit() {
  }

}
