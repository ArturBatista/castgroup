import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../models/Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl: String = environment.baseUrl;

  constructor( private http: HttpClient) { }

  findByEmail(user: Login): Observable<Login>{
    const url = `${this.baseUrl}/login`;
    console.log('url',  url);
    return this.http.post<Login>(url, user);
  }
}
