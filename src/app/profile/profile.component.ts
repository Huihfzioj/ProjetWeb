// profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Alexa Rawles',
    role: 'Alumni',
    graduationYear: 2021,
    jobTitle: 'Developer',
    company: 'XY',
    employmentType: 'Full-Time',
    industry: 'Web development',
    badges: ['🌟 Mentor', '📧 Job/Internship Referrals'],
    skills: ['Career Advice'],
    hasPosts: false // Ajout de la propriété manquante
  };

  newPostContent = '';

  publishFirstPost() {
    this.user.hasPosts = true;
    // Ici vous pourriez appeler un service pour sauvegarder le statut
    console.log('First post published status');
  }

  createPost() {
    if (this.newPostContent.trim()) {
      // Ici vous pourriez appeler un service pour créer le post
      console.log('Nouveau post:', this.newPostContent);
      this.newPostContent = '';
      this.user.hasPosts = true;
    }
  }
}