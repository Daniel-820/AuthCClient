import { Directive, ElementRef, Input, input, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Directive({
  selector: '[appHideIfClaimsNotMet]'
})
export class HideIfClaimsNotMetDirective implements OnInit {

  @Input("appHideIfClaimsNotMet") claimReq!:Function;

  constructor(private authService:AuthService,
private elmentRef:ElementRef
  ) { }

  ngOnInit(): void {
  const claims=this.authService.getClaims();
  if(!this.claimReq(claims))
 this.elmentRef.nativeElement.style.display="none"
  }

}
