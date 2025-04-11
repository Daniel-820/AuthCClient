import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { AuthService } from '../shared/services/auth.service';
import { HideIfClaimsNotMetDirective } from '../directives/hide-if-claims-not-met.directive';
import { claimReq } from '../utils/claim-req-utils';

@Component({
  selector: 'app-dashboard',
  imports: [HideIfClaimsNotMetDirective],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent implements OnInit {

  claimReq=claimReq
constructor(private router:Router
  ,private authService:AuthService
  ,private userService:UserService){}

fullName:string="";

  ngOnInit(): void {
    this.userService.getUserProfile()
    .subscribe({
      next:(res:any)=>this.fullName=res.fullName,
      error:(err:any)=>console.log("error while retrive user profile:\n",err)
    })
  }




}
