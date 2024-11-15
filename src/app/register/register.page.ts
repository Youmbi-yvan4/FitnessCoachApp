import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user: User = {
    id: 0, // ID will be dynamically generated
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    height: 0,
    weight: 0,
    sportLevel: '',
    criteria: [],
    profilePicture: '',
    isCoach: false,
  };

  sportLevels = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];

  constructor(private router: Router, private dataService: DataService) {}

  // Register method that calls the DataService to add a new user
  register() {
    if (this.user.email && this.user.password) {
      // Assigning the user ID dynamically (e.g., using timestamp or any other unique value)
      this.user.id = new Date().getTime();

      // Adding the user to the DataService
      this.dataService.addUser(this.user);

      alert('Registration successful!');
      this.router.navigate(['/login']);
    } else {
      alert('Please fill out all fields');
    }
  }
}
