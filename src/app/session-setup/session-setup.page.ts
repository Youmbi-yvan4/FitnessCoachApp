import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-session-setup',
  templateUrl: './session-setup.page.html',
  styleUrls: ['./session-setup.page.scss'],
})
export class SessionSetupPage {
  session = {
    objective: '',
    date: '',
    time: '',
    sportType: '',
  };

  sports = ['Gymnastics', 'Swimming', 'Running', 'Taekwondo'];

  constructor(private router: Router, private dataService: DataService) {}

  saveSession() {
    this.dataService.addSession(this.session);
    alert('Session saved successfully!');
    this.router.navigate(['/home']);
  }
}
