/*import { Component } from '@angular/core';

@Component({
  selector: 'app-join-us',
  imports: [],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {

}*/
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent {
  isSignUpTab: boolean = true;
  userType: 'student' | 'alumni' = 'student';
  showPassword: boolean = false;

  // Student form model
  student = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  // Alumni form model
  alumni = {
    fullName: '',
    graduationYear: '',
    email: '',
    id: '',
    department: '',
    password: ''
  };

  // Login form model
  login = {
    email: '',
    password: '',
    rememberMe: false
  };

  showSignUp() {
    this.isSignUpTab = true;
  }

  showLogin() {
    this.isSignUpTab = false;
  }

  selectUserType(type: 'student' | 'alumni') {
    this.userType = type;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.userType === 'student') {
      console.log('Student sign up:', this.student);
      // Ajoutez ici la logique pour l'inscription étudiant
    } else {
      console.log('Alumni sign up:', this.alumni);
      // Ajoutez ici la logique pour l'inscription alumni
    }
  }

  onLogin() {
    console.log('Login attempt:', this.login);
    // Ajoutez ici la logique de connexion
  }
}
