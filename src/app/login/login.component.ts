import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ScheduleReportComponent } from '../schedule-report/schedule-report.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: boolean = true;
  message: string | null = null;
  userDetails = {
    email: '',
    password: ''
  };

  user_logins = [
    { email: "user01@gmail.com", password: "12345678" },
    { email: "user02@gmail.com", password: "12345678" },
    { email: "user03@gmail.com", password: "12345678" },
    { email: "user04@gmail.com", password: "12345678" },
    { email: "user05@gmail.com", password: "12345678" }
  ];

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public dialog:MatDialog) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void { }

  clear() {
    this.loginForm.reset();
    this.loginForm.markAsPristine();
    this.error = true;
    this.message = null;
  }

  login() {
    if (this.loginForm.valid) {
      this.userDetails = this.loginForm.value;
      const user = this.user_logins.find(u =>
        u.email === this.userDetails.email.trim() &&
        u.password === this.userDetails.password.trim()
      );
      
      if (user) {
        this.error = true;
        localStorage.setItem('user', JSON.stringify(user));
        
        this.router.navigate(['/schedule']);
      } else {
        this.message = "Invalid Credentials";
        this.error = false;
      }
    } else {
      this.message = "The form is invalid";
      this.error = false;
    }
  }
}
