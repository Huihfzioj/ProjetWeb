
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

  

  isSignUpTab: boolean = true; // Always true for Sign Up page
  userType: string = 'student';
  showPassword: boolean = false;

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
  router: any;

  selectUserType(type: string): void {
    this.userType = type;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.userType === 'student') {
      console.log('Student Sign Up:', this.student);
      console.log('Navigating to /profile');
      this.router.navigate(['/profile'], { state: { user: this.student, userType: this.userType } });
    } else {
      console.log('Alumni Sign Up:', this.alumni);
      // Navigate to Profile page, passing the alumni data
      console.log('Navigating to /profile');
      this.router.navigate(['/profile'], { state: { user: this.alumni, userType: this.userType } });
    // Optionally, navigate back to homepage or show a success message
  }

  
}}