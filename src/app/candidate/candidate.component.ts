import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor(private router:Router) {
    if( sessionStorage.type!="CANDIDATE")
    {
      this.router.navigate(['login']);
    }
   }

  ngOnInit() {
  }

}
