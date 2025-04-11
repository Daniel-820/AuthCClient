import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { HideIfClaimsNotMetDirective } from '../../directives/hide-if-claims-not-met.directive';
import { claimReq } from '../../utils/claim-req-utils';

@Component({
  selector: 'app-main-layouts',
  imports: [RouterOutlet,RouterLink,HideIfClaimsNotMetDirective],
  templateUrl: './main-layouts.component.html',
  styles: ``
})
export class MainLayoutsComponent {


  constructor(private router:Router
    ,private authService:AuthService
    ,private userService:UserService){}
    claimReq=claimReq

  onLogout(){
    this.authService.deleteToken();
    this.router.navigateByUrl("/signin");

  }
}
