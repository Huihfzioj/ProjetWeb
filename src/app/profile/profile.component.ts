import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterConversationsWithUnreadPipe } from './filter-conversations-with-unread.pipe';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterConversationsWithUnreadPipe],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {
  user: any = {};
  userType: string = '';
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  showMenu: boolean = false;
  showLatestOffers: boolean = false;
  showMessages: boolean = false;
  showDocuments: boolean = true; // Flag to toggle Documents visibility (default to true)
  documents: { description: string, fileName: string, fileType: string, date: string, fileUrl?: string }[] = [];
  description: string = '';
  selectedFile: File | null = null;
  showDashboard = false;

  // Properties for editable fields
  skills: string = 'Not specified';
  specialty: string = 'NA';
  searchingFor: string = 'NA';
  graduationYear: string = '2027';
  // Ajoutez dans la partie des propriétés
suggestedAlumni = [
  { name: 'Nadia Lauren', connected: false },
  { name: 'Foulena', connected: false },
  { name: 'Hedil Jassi', connected: false },
  { name: 'Alexa Rawles', connected: true },
  { name: 'Mohamed Ali', connected: true }
];
toggleDashboard() {
  // Réinitialisez tous les états
  this.resetAllViews();
  
  // Activez uniquement le dashboard
  this.showDashboard = true;
  console.log('Dashboard activé. État actuel:', {
    showDashboard: this.showDashboard,
    showLatestOffers: this.showLatestOffers,
    showMessages: this.showMessages,
    showDocuments: this.showDocuments
  });
}
private resetAllViews() {
  this.showDashboard = false;
  this.showLatestOffers = false;
  this.showMessages = false;
  this.showDocuments = false;
  this.showEditForm = false;
  this.showAddForm = false;
  this.showMenu = false;
}
// Dans profile.component.ts
topSkills = [
  { name: 'Data Analysis', percentage: 80 },
  { name: 'Python', percentage: 70 },
  { name: 'Project Management', percentage: 60 }
];

industries = [
  { name: 'Technology', percentage: 30 },
  { name: 'Healthcare', percentage: 15 },
  { name: 'Finance', percentage: 20 },
  { name: 'Others', percentage: 35 }
];
topEmployers = [
  { logo: 'google-logo.svg', name: 'Google', sector: 'Technology', hires: 80, interns: 10 },
  { logo: 'microsoft-logo.svg', name: 'Microsoft', sector: 'Technology', hires: 40, interns: 25 }
];



  // Mock data for Latest Offers
  latestOffers: { user: string, role: string, date: string, description: string }[] = [
    {
      user: 'Alexa Rawles',
      role: 'Developer @ XY',
      date: 'Feb 10, 2025',
      description: 'INTERNSHIP OFFER: DevOps Engineer—6 months—Vinci Construction\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum erat maximus, eleifend nunc vestibulum, auctor elit. Nulla non fringilla purus, id pharetra ipsum. Vivamus in molestie ligula. Aenean ornare urna vel massa pulvinar, et molestie lorem finibus. Integer in risus eu tortor varius auctor. Morbi sed ipsum in tortor pharetra, id pharetra diam. Aliquam nec justo vel felis ornare ipsum venenatis. Morbi enim neque, faucibus in eros est, sit amet pharetra diam. Aliquam nec justo vel felis ornare ipsum venenatis. Morbi enim neque, faucibus in eros est, sit amet pharetra diam. Aliquam nec justo vel felis ornare ipsum venenatis. Morbi enim neque, faucibus in eros est, sit amet pharetra diam. Nam pulvinar, turpis nec convallis facilisis, velit felis lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi lorem in tempor enim dui nec mi rutrum feugiat. Praesent luctus placerat faucibus. Cras tincidunt ut enim nec imperdiet. Nulla laoreet leo vel massa elementum, nec faucibus pharetra. Suspendisse gravida ante molestie, rhoncus nulla a, blandit dolor.'
    },
    {
      user: 'Alexa Rawles',
      role: 'Developer @ XY',
      date: 'Feb 10, 2025',
      description: 'INTERNSHIP OFFER: DevOps Engineer—6 months—Vinci Construction\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum erat maximus, eleifend nunc vestibulum, auctor elit. Nulla non fringilla purus, id pharetra ipsum. Vivamus in molestie ligula. Aenean ornare urna vel massa pulvinar, et molestie lorem finibus. Integer in risus eu tortor varius auctor. Morbi sed ipsum in tortor pharetra, id pharetra diam. Aliquam nec justo vel felis ornare ipsum venenatis. Morbi enim neque, faucibus in eros est, sit amet pharetra diam. Aliquam nec justo vel felis ornare ipsum venenatis. Morbi enim neque, faucibus in eros est, sit amet pharetra diam. Aliquam nec justo vel felis ornare ipsum venenatis. Morbi enim neque, faucibus in eros est, sit amet pharetra diam. Nam pulvinar, turpis nec convallis facilisis, velit felis lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi lorem in tempor enim dui nec mi rutrum feugiat. Praesent luctus placerat faucibus. Cras tincidunt ut enim nec imperdiet. Nulla laoreet leo vel massa elementum, nec faucibus pharetra. Suspendisse gravida ante molestie, rhoncus nulla a, blandit dolor.'
    }
  ];

  // Mock data for Messages
  conversations: { user: string, role: string, lastMessage: string, timeAgo: string, unreadCount?: number, messages: { sender: string, text: string, time: string }[] }[] = [
    {
      user: 'Foulen Ben Foulen',
      role: 'Alumni',
      lastMessage: "You're Welcome",
      timeAgo: 'Now',
      messages: [
        { sender: 'Foulen Ben Foulen', text: 'Of course. Thank you so much for taking your time.', time: 'Today 11:56' },
        { sender: 'You', text: 'Welcome.', time: 'Today 11:59' }
      ]
    },
    {
      user: 'Nadia Lauren',
      role: '',
      lastMessage: 'I think that looks good but you ...',
      timeAgo: '5m Ago',
      unreadCount: 1,
      messages: []
    }
  ];

  // Selected conversation for displaying messages
  selectedConversation: any = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras.state?.['user'];
    this.userType = navigation?.extras.state?.['userType'];
    console.log('Received user:', this.user);
  }
  

  // Toggle document form visibility
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) {
      this.description = '';
      this.selectedFile = null;
    }
  }

  // Toggle edit form visibility
  toggleEditForm() {
    this.showEditForm = !this.showEditForm;
  }

  // Toggle menu visibility
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  // Toggle Latest Offers visibility
  toggleLatestOffers() {
    this.showLatestOffers = !this.showLatestOffers;
    this.showEditForm = false;
    this.showAddForm = false;
    this.showMessages = false;
    this.showDocuments = false; // Hide documents when showing Latest Offers
  }

  // Toggle Messages visibility
  toggleMessages() {
    this.showMessages = !this.showMessages;
    this.showEditForm = false;
    this.showAddForm = false;
    this.showLatestOffers = false;
    this.showDocuments = false; // Hide documents when showing Messages
    this.selectedConversation = null;
  }

  // Toggle Documents visibility
  toggleDocuments() {
    this.showDocuments = !this.showDocuments;
    this.showEditForm = false;
    this.showAddForm = false;
    this.showLatestOffers = false;
    this.showMessages = false;
  }

  // Select a conversation to display messages
  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
  }

  // Handle file selection for document upload
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // Handle document form submission
  postDocument() {
    if (this.description && this.selectedFile instanceof File) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const fileUrl = URL.createObjectURL(this.selectedFile);

      this.documents.push({
        description: this.description,
        fileName: this.selectedFile.name,
        fileType: this.selectedFile.type.includes('pdf') ? 'PDF' : 'FILE',
        date: formattedDate,
        fileUrl: fileUrl
      });

      this.description = '';
      this.selectedFile = null;
      this.showAddForm = false;
    }
  }

  // Handle adding skills
  addSkill() {
    if (this.skills && this.skills !== 'Not specified') {
      this.skills = this.skills;
    }
  }

  // Handle adding specialty
  addSpecialty() {
    if (this.specialty && this.specialty !== 'NA') {
      this.specialty = this.specialty;
    }
  }

  // Handle changing searching for
  changeSearchingFor() {
    if (this.searchingFor && this.searchingFor !== 'NA') {
      this.searchingFor = this.searchingFor;
    }
  }

  // Handle changing graduation year
  changeGraduationYear() {
    if (this.graduationYear && this.graduationYear !== '2027') {
      this.graduationYear = this.graduationYear;
    }
  }

  // Handle menu actions
  logOut() {
    console.log('Logging out...');
    this.showMenu = false;
    this.router.navigate(['/']);
  }

  setAccountToPrivate() {
    console.log('Setting account to private...');
    this.showMenu = false;
  }

  deleteAccount() {
    console.log('Deleting account...');
    this.showMenu = false;
  }
 


  ngOnInit() {
    console.log('Initialisation du composant');
    this.logDashboardData();
  }

  private logDashboardData() {
    console.log('Données du dashboard:', {
      showDashboard: this.showDashboard,
      topEmployers: this.topEmployers,
      topSkills: this.topSkills,
      industries: this.industries,
      suggestedAlumni: this.suggestedAlumni
    });
  
    
}}