import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile-alumni',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile-alumni.component.html',
  styleUrls: ['./profile-alumni.component.css']
})
export class ProfileAlumniComponent {

  showHome: boolean = false;
  showPosts: boolean = false;
  showNewPost: boolean = false;
  showEditProfile: boolean = false;
  showFlaggedPopup: boolean = false;
  isJobOffer: boolean = false;
  jobType: string = 'internship';
  duration: string = '6 months';
  company: string = '';
  position: string = '';
  salary: string = '';
  description: string = '';
  content: string = '';
  jobTitle: string = 'Developer';
  companyName: string = 'XY';
  preferences: { mentor: boolean, referrals: boolean, advice: boolean } = { mentor: false, referrals: false, advice: false };
  posts: { author: string, company: string, date: string, content: string }[] = [];
  showPostMenu: boolean = false;
  selectedPostIndex: number | null = null;
  editingPostIndex: number | null = null;
  showOfferMenu: boolean = false;
  selectedOfferIndex: number | null = null;
  
  constructor(private router: Router) {
    this.router.navigate(['/profile-alumni']);
  }

  offers = [
    {
      author: 'Alexa Rawles',
      company: '@XY',
      date: 'Feb 18, 2025',
      title: 'Internship Offer: DevOps Engineer - 6 months - Vinci Construction',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum erat maximus, stet pretium ipsum. Vivamus in molestie ligula. Aenean sit amet urna est. Vestibulum efficitur porttitor justo, sit amet aliquam felis vulputate sagittis. Nunc turpis orci, consectetur ut mi ac, pulvinar tristique nunc. Integer consequat turpis non tellus luctus, in ornare ipsum venenatis. Morbi enim neque, faucibus in eros at, aliquet pharetra diam. Aliquam nec justo quis tellus ornare maximus. Integer vel nunc odio. Donec vel neque id mi vestibulum lacinia ut rhoncus est.'
    },
    {
      author: 'Alexa Rawles',
      company: '@XY',
      date: 'Feb 18, 2025',
      title: 'Internship Offer: DevOps Engineer - 6 months - Vinci Construction',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum erat maximus, stet pretium ipsum. Vivamus in molestie ligula. Aenean sit amet urna est. Vestibulum efficitur porttitor justo, sit amet aliquam felis vulputate sagittis. Nunc turpis orci, consectetur ut mi ac, pulvinar tristique nunc. Integer consequat turpis non tellus luctus, in ornare ipsum venenatis. Morbi enim neque, faucibus in eros at, aliquet pharetra diam. Aliquam nec justo quis tellus ornare maximus. Integer vel nunc odio. Donec vel neque id mi vestibulum lacinia ut rhoncus est.'
    }
  ];

  
  classOf2021 = [
    { name: 'Nadia Lauren' },
    { name: 'Foulena' }
  ];

  studentsInField = [
    { name: 'Hedi Jlassi' }
  ];



  toggleHome(): void {
    this.showHome = !this.showHome;
    if (this.showHome) {
      this.showPosts = false;
      this.showNewPost = false;
      this.showEditProfile = false;
      this.editingPostIndex = null;
      this.showPostMenu = false;
      this.selectedPostIndex = null;
    }
  }
  togglePosts(): void {
    this.showPosts = !this.showPosts;
    if (this.showPosts) {
      this.showHome = false;
      this.showNewPost = false;
      this.showEditProfile = false;
      this.editingPostIndex = null;
      this.showPostMenu = false;
      this.selectedPostIndex = null;
      this.showOfferMenu = false;
      this.selectedOfferIndex = null;
      this.showFlaggedPopup = false;
    }
  }
  toggleEditProfile(): void {
    this.showEditProfile = !this.showEditProfile;
    if (this.showEditProfile) {
      this.showNewPost = false;
      this.editingPostIndex = null;
    }
  }
  toggleNewPost(): void {
    this.showNewPost = !this.showNewPost;
  }
  toggleJobOffer(): void {
    if (!this.isJobOffer) {
      this.jobType = 'internship';
      this.duration = '6 months';
      this.company = '';
      this.position = '';
      this.salary = '';
      this.description = '';
      this.content = '';
    }
  }
  toggleOfferMenu(index: number): void {
    if (this.selectedOfferIndex === index && this.showOfferMenu) {
      this.showOfferMenu = false;
      this.selectedOfferIndex = null;
    } else {
      this.showOfferMenu = true;
      this.selectedOfferIndex = index;
    }
  }


  flagForReview(index: number): void {
    console.log(`Offer at index ${index} flagged for review`);
    this.showOfferMenu = false;
    this.selectedOfferIndex = null;
  }
  closeFlaggedPopup(): void {
    this.showFlaggedPopup = false;
  }

  changeJobTitle(): void {
    if (this.jobTitle.trim()) {
      console.log('Job title changed to:', this.jobTitle);
    }
  }

  changeCompany(): void {
    if (this.companyName.trim()) {
      console.log('Company changed to:', this.companyName);
    }
  }

  savePreferences(): void {
    console.log('Preferences saved:', this.preferences);
  }
 submitPost(): void {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  if (this.isJobOffer && this.description.trim()) {
    const postContent = `${this.jobType.charAt(0).toUpperCase() + this.jobType.slice(1)} Offer - ${this.position} at ${this.company}, Duration: ${this.duration}, Salary: ${this.salary || 'N/A'}\n${this.description}`;
    this.posts.push({ author: 'Alexa Rawles', company: this.company, date: currentDate, content: postContent });
  } else if (this.content.trim()) {
    this.posts.push({ author: 'Alexa Rawles', company: 'XY', date: currentDate, content: this.content });
  }
  this.showNewPost = false;
  this.isJobOffer = false;
  this.toggleJobOffer();
  }

  togglePostMenu(index: number): void {
    if (this.selectedPostIndex === index && this.showPostMenu) {
      this.showPostMenu = false;
      this.selectedPostIndex = null;
    } else {
      this.showPostMenu = true;
      this.selectedPostIndex = index;
    }

  }
  editPost(index: number): void {
    this.editingPostIndex = index;
    this.showPostMenu = false;
    this.selectedPostIndex = null;
  }

  deletePost(index: number): void {
    this.posts.splice(index, 1);
    this.showPostMenu = false;
    this.selectedPostIndex = null;
  }

  saveEdit(): void {
    this.editingPostIndex = null;
  }

  cancelEdit(): void {
    this.editingPostIndex = null;
  }
}



