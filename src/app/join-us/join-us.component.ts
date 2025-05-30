
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]
import { Router, RouterLink } from '@angular/router'; // Import RouterLink for routerLink directive
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf, *ngFor, etc.
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  isSignUpTab: boolean = true; // Initialize to show Sign Up tab by default
  userType: string = 'student'; // Default to student form
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

  login = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router,private authService: AuthService) {}

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
      this.http.post('/api/student/signup', this.student).subscribe({
        next: (savedUser: any) => {
          this.authService.setUser(savedUser);
          this.authService.setUserType('student');
          this.router.navigate(['/profile']);
        },
        error: (error) => {
          console.error('Student registration failed:', error);
          alert('Failed to register student.');
        }
      });
    } else {
      console.log('Alumni Sign Up:', this.alumni);
      this.http.post('/api/alumni/signup', this.alumni).subscribe({
        next: (savedUser: any) => {
          this.authService.setUser(savedUser);
          this.authService.setUserType('alumni');
          this.router.navigate(['/profile-alumni']);
        },
        error: (error) => {
          console.error('Alumni registration failed:', error);
          alert('Failed to register alumni.');
        }
      });
    }
  }

  // Handle form submission for Log In
  onLogin(): void {
    console.log('Log In:', this.login);
  }
}