import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  http: HttpClient = inject(HttpClient)

  constructor() { }

  login(username: string, password: string) {
    const data = {
      username: username,
      password: password
      // returnSecureToken: true  
    };
    return this.http.post('http://127.0.0.1:8000/login', data);
  }

  signup(username: string, email: string, password: string) {
    const data = {
      username: username,
      password: password,
      email:email
      // returnSecureToken: true
    };
    return this.http.post('http://127.0.0.1:8000/signUp', data);
  }

  logout(username: string, password: string) {
    const data = {
      username: username,
      password: password,
      returnSecureToken: true
    };
    return this.http.post('http://127.0.0.1:8000/login', data);
  }
}
