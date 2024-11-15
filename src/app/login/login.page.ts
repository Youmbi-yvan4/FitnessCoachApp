import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router, private dataService: DataService) {}

  login() {
    // Call the getUserByEmail method to find the user by email
    const user = this.dataService.getUserByEmail(this.email);
    if (user && user.password === this.password) {
      // alert('Login successful!');
      this.router.navigate(['/home']); // Navigate to the home page
    } else {
      alert('Invalid email or password'); // Show error if no user or incorrect password
    }
  }
}
