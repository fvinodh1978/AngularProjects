import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  // loginForm: FormGroup;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private toast: HotToastService){}
  // constructor(private toast: HotToastService, private fb: FormBuilder) {
  //   this.loginForm = this.fb.group({
  //     firstname: new FormControl('', Validators.required),
  //     lastname: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     phone: new FormControl('', Validators.required),
  //     dateOfBirth:new FormControl(''),
  //     address: new FormControl(),
  //     country: new FormControl('India')
  //   })
  // }

  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  isLoginMode: boolean = true;
  pwdHide = true;
  pwdType = "password";


  ngOnInit(): void { }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  // get email() {
  //   return this.loginForm.get('email');
  // }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    // const { username, password, email } = this.loginForm.value;
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
