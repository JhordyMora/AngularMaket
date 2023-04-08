import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl ='https://young-sands-07814.herokuapp.com/api/auth'; 

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string){
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password});
  }

  profile(token: string ){
    // let headers = new HttpHeaders();
    // headers = headers.set(
    //     'Authorization', `Bearer ${token}`
    // );
    console.log("inside profile method");
    return this.http.get<User>(`${this.apiUrl}/profile`,{
        // headers
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  }
}
