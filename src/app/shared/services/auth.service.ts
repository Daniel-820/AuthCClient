import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

  baseURL="http://localhost:5209/api";

  CreateUser(formData:any){
 return this.http.post(this.baseURL+"/signup",formData);
  }
}
