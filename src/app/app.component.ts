import { Component } from '@angular/core';
import { EmtrService } from './emtr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogin:false;
  constructor(private emService:EmtrService,private router:Router)
  {

  }
  ngOnInit()
  {
    this.emService.getEmittedValueForLogbtnSwitch()
    .subscribe(item => this.isLogin=item);
  }
  logout()
  {
    this.isLogin=false;
    delete sessionStorage['type'];
    delete sessionStorage['userId'];
    delete sessionStorage['location'];
    delete sessionStorage['profile'];
    this.router.navigate(['login']);
  }
}
