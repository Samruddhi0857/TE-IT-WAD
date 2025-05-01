import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: any;

  constructor(private authService: AuthserviceService) {
    this.user = this.authService.getLoggedInUser();
  }

}
