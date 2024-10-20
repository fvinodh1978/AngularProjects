import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

export function passwordsMatchValidators(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsMatchValidators() })

  constructor(private toast: HotToastService) { }

  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  isLoginMode: boolean = true;
  pwdHide = true;
  pwdType = "password";

  ngOnInit(): void { }

  get username() {
    return this.signUpForm.get('username');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  
  submit() {
    if (!this.signUpForm.valid) {
      return;
    }

    const { username, email, password } = this.signUpForm.value;
    console.log(username);
    console.log(password);

    if (this.isLoginMode) {

      // this.authService.login(username!, password!).subscribe(() => { this.router.navigate(['/home']) });
      // Login Logic
      this.authService.signup(username!, email!, password!).subscribe({
        next: (res) => { this.router.navigate(['/login']) },
        error: (err) => { this.onLoginFailure() }
      })
    }
    // this.loginForm.reset();
  }

  onLoginFailure() {
    this.toast.error('Login failed. Please try again.');
  }
}
