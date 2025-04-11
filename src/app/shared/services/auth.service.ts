import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOKEN_KEY } from '../Constant';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}



  CreateUser(formData:any){
    const payload = {
      Email: formData.email,
      Password: formData.password,
      FullName: formData.fullName,
      Gender: "Male",  // Or get from form
      Age: 24,         // Or get from form
      LibraryID: 0, // Add if needed
      Role: "Admin"     // Or get from form
  };

  return this.http.post(environment.apiBaseUrl + "/signup", payload, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  });
  }

  signIn(formData:any){
    return this.http.post(environment.apiBaseUrl+"/signin",formData);
     }

     isLoggedIn(){
      return this.getToken()!=null?true:false;
    }

    saveToken(token:string){
      localStorage.setItem(TOKEN_KEY,token);
    }

    getToken() {
      return localStorage.getItem(TOKEN_KEY);
    }

    deleteToken(){
      localStorage.removeItem(TOKEN_KEY);
    }


    getClaims(){
     return JSON.parse(window.atob(this.getToken()!.split('.')[1]))
    }
   

}
