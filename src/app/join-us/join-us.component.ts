<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]
import { RouterLink } from '@angular/router'; // Import RouterLink for routerLink directive
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf, *ngFor, etc.
=======
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
>>>>>>> 7a77b42e9a151f8072696ce34dda226c075a570b

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
<<<<<<< HEAD
export class JoinUsComponent implements OnInit {
  isSignUpTab: boolean = true; // Initialize to show Sign Up tab by default
  userType: string = 'student'; // Default to student form
  showPassword: boolean = false;

  // Initialize form data objects
=======
export class JoinUsComponent {
  isSignUpTab = true;
  userType: 'student' | 'alumni' = 'student';
  showPassword = false;

  // Modèles de formulaire
>>>>>>> 7a77b42e9a151f8072696ce34dda226c075a570b
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

<<<<<<< HEAD
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
=======
  // Basculer entre Sign Up et Login
  setActiveTab(isSignUp: boolean) {
    this.isSignUpTab = isSignUp;
    this.resetForms();
  }

  // Sélectionner le type d'utilisateur
  selectUserType(type: 'student' | 'alumni') {
    this.userType = type;
  }

  // Afficher/masquer le mot de passe
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Soumission du formulaire Sign Up
  onSubmit() {
    if (this.userType === 'student') {
      console.log('Inscription Étudiant:', this.student);
      // TODO: Implémenter l'inscription
    } else {
      console.log('Inscription Alumni:', this.alumni);
      // TODO: Implémenter l'inscription
    }
  }

  // Soumission du formulaire Login
  onLogin() {
    console.log('Connexion:', this.login);
    // TODO: Implémenter la connexion
  }

  // Réinitialiser les formulaires
  private resetForms() {
    this.student = { firstName: '', lastName: '', email: '', password: '' };
    this.alumni = { fullName: '', graduationYear: '', email: '', id: '', department: '', password: '' };
    this.login = { email: '', password: '', rememberMe: false };
  }
>>>>>>> 7a77b42e9a151f8072696ce34dda226c075a570b
}