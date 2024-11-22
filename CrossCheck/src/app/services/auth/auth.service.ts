// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://127.0.0.1:8000/login'; // Replace with your actual backend login URL

  // return this.http.post('http://127.0.0.1:8000/login', data);

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token); // Store the token in local storage
        this.router.navigate(['/home']); // Redirect to the home page upon successful login
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
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
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
