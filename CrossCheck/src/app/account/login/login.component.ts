import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('username')
  username!: ElementRef;
  @ViewChild('password')
  password!: ElementRef;

  loading = false;
  
  router: Router = inject(Router);
  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  OnLoginClicked() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    // const user = this.authService.login(username, password);

    // if(user === undefined){
    //   alert('The login credentials you have entered is not correct.')
    // }
    // else{
    //   alert('Welcome ' + user.name + '. You are logged in.');
    //   this.router.navigate(['\Courses']);
    // }
    this.loading = true;
    this.router.navigate(["/tester"]);
  }


  onSubmit() {

    console.log("Vinodh");
    this.loading = true;
    this.router.navigate(["/register"]);
  }
}
