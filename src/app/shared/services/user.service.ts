import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { TOKEN_KEY } from '../Constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,
    private authService:AuthService
  ) { }

  getUserProfile(){
    return this.http.get(environment.apiBaseUrl+"/UserProfile")
  }

}
