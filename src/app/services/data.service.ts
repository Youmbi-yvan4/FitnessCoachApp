import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Coach } from '../models/coach.model';
import { Session } from '../models/session.model'; // Import the Session model

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private users: User[] = [];
  private coaches: Coach[] = [];
  private sessions: Session[] = []; // Array to store sessions

  constructor() {}

  // Add a user
  addUser(user: User): void {
    this.users.push(user);
    console.log('User added:', user);
  }

  // Get all users
  getUsers(): User[] {
    return this.users;
  }

  // Get a user by email
  getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  // Add a coach
  addCoach(coach: Coach): void {
    this.coaches.push(coach);
    console.log('Coach added:', coach);
  }

  // Get all coaches
  getCoaches(): Coach[] {
    return this.coaches;
  }

  // Add a session
  addSession(session: Session): void {
    this.sessions.push(session);
    console.log('Session added:', session);
  }

  // Get all sessions
  getSessions(): Session[] {
    return this.sessions;
  }
}
