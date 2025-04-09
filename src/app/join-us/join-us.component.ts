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
  isSignUpTab = true;
  userType: 'student' | 'alumni' = 'student';
  showPassword = false;

  // Modèles de formulaire
  student = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  alumni = {
    fullName: '',
    graduationYear: '',
    email: '',
    id: '',
    department: '',
    password: ''
  };

  login = {
    email: '',
    password: '',
    rememberMe: false
  };

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
}