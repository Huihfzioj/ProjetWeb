import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-alumni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-alumni.component.html',
  styleUrl: './profile-alumni.component.css'
})
export class ProfileAlumniComponent {

  
  showPosts: boolean = false;

  constructor(private router: Router) {
    this.router.navigate(['/profile-alumni']);
  }

  togglePosts(): void {
    this.showPosts = !this.showPosts;
  }
}
