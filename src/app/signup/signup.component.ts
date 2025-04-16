
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

  constructor(private router: Router) {}

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
 

  selectUserType(type: string): void {
    this.userType = type;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  
  
  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form data - Student:', this.student);
  console.log('Form data - Alumni:', this.alumni);

    if (this.userType === 'student') {
      console.log('Student form valid:', this.isStudentFormValid());
      if (this.isStudentFormValid()) {
        console.log('Navigating to profile...');
        this.router.navigate(['/profile'], {
          state: { user: this.student, userType: this.userType }
        });
      } else {
        alert('Please fill all student fields!');
      }
    } else {
      console.log('Alumni form valid:', this.isAlumniFormValid());
      if (this.isAlumniFormValid()) {
        console.log('Navigating to verification-pending with....');
        this.router.navigate(['/verification-pending'], {
          state: { user: this.alumni, userType: this.userType }
        });
      } else {
        alert('Please fill all alumni fields!');
        // Add error handling (show message to user)
      }}}
      private isStudentFormValid(): boolean {
        return (
          this.student.firstName?.trim().length > 0 &&
          this.student.lastName?.trim().length > 0 &&
          this.student.email?.trim().length > 0 &&
          this.student.password?.trim().length >= 8
        );
      }
      
      private isAlumniFormValid(): boolean {
        return (
          this.alumni.fullName?.trim().length > 0 &&
          this.alumni.graduationYear !== null &&
          this.alumni.email?.trim().length > 0 &&
          this.alumni.id?.trim().length > 0 &&
          this.alumni.department?.trim().length > 0 &&
          this.alumni.password?.trim().length >= 8
        );
      }
}
