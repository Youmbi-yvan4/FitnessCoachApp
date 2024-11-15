import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Coach } from '../models/coach.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  totalDistance = 25; // Example data
  totalDuration = '2h 30m'; // Example data
  coaches: Coach[] = []; // Explicitly declare coaches as an array of Coach

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
  // If there are no coaches, add some dummy coaches
  if (this.coaches.length === 0) {
    const dummyCoaches: Coach[] = [
      new Coach(1, 'John', 'Doe', 'john@example.com', 'assets/coaches/john.jpg', 'Fitness', 'Certified personal trainer', 30),
      new Coach(2, 'Jane', 'Smith', 'jane@example.com', 'assets/coaches/jane.jpg', 'Yoga', 'Experienced yoga instructor', 40),
      new Coach(3, 'Mike', 'Johnson', 'mike@example.com', 'assets/coaches/mike.jpg', 'Running', 'Marathon coach', 25),
    ];
    dummyCoaches.forEach(coach => this.dataService.addCoach(coach)); // Add dummy coaches to DataService
    this.coaches = dummyCoaches; // Set the coaches in the component
  }
}


  // Navigate to the coach details page
  viewCoachDetails(coach: Coach) {
    this.router.navigate(['/coach-details'], { state: { coach } });
  }

  // Navigate to the session setup page for the selected coach
  reserveSession(coach: Coach) {
    this.router.navigate(['/session-setup'], { state: { coach } });
  }
}
