import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent {
  user = {
    email: '',
    password: ''
  };

  onSubmit() {
    // Logique d'inscription
    console.log('Formulaire soumis', this.user);
  }
}