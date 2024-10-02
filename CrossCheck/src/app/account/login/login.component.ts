import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
    // email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private toast: HotToastService) { }

  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  isLoginMode: boolean = true;

  ngOnInit(): void { }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    console.log(username);
    console.log(password);

    if (this.isLoginMode) {

      // this.authService.login(username!, password!).subscribe(() => { this.router.navigate(['/home']) });
      // Login Logic
      this.authService.login(username!, password!).subscribe({
        next: (res) => { this.router.navigate(['/home']) },
        error: (err) => { this.onLoginFailure() }
      })
    }
    // this.loginForm.reset();
  }

  onLoginFailure() {
    this.toast.error('Login failed. Please try again.');
  }
}
