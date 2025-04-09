<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]
import { RouterLink } from '@angular/router'; // Import RouterLink for routerLink directive
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf, *ngFor, etc.
<<<<<<< Updated upstream
=======

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

>>>>>>> Stashed changes

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export class JoinUsComponent implements OnInit {
  isSignUpTab: boolean = true; // Initialize to show Sign Up tab by default
  userType: string = 'student'; // Default to student form
  showPassword: boolean = false;

  // Initialize form data objects
<<<<<<< Updated upstream
=======

export class JoinUsComponent {
  isSignUpTab = true;
  userType: 'student' | 'alumni' = 'student';
  showPassword = false;

  // Modèles de formulaire

>>>>>>> Stashed changes
  student = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  alumni = {
    fullName: '',
    graduationYear: null as number | null,
    email: '',
    id: '',
    department: '',
    password: ''
  };

  login = {
    email: '',
    password: ''
  };

  constructor() {}

  ngOnInit(): void {}

  // Toggle between Sign Up and Log In tabs
  showSignUp(): void {
    this.isSignUpTab = true;
  }

  showLogin(): void {
    this.isSignUpTab = false;
  }

  // Select user type (student or alumni)
  selectUserType(type: string): void {
    this.userType = type;
  }

  // Toggle password visibility
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  // Handle form submission for Sign Up
  onSubmit(): void {
    if (this.userType === 'student') {
      console.log('Student Sign Up:', this.student);
    } else {
      console.log('Alumni Sign Up:', this.alumni);
    }
  }

  // Handle form submission for Log In
  onLogin(): void {
    console.log('Log In:', this.login);
  }
}