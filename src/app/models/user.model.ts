export class User {
    id: number;  // User ID (can be a number or string, depending on how you want to generate it)
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    height: number;
    weight: number;
    sportLevel: string;
    criteria: string[];  // Array of sport criteria
    profilePicture: string;
    isCoach: boolean;  // Determines whether the user is a coach
  
    constructor(
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phoneNumber: string,
      height: number,
      weight: number,
      sportLevel: string,
      criteria: string[],
      profilePicture: string,
      isCoach: boolean
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.phoneNumber = phoneNumber;
      this.height = height;
      this.weight = weight;
      this.sportLevel = sportLevel;
      this.criteria = criteria;
      this.profilePicture = profilePicture;
      this.isCoach = isCoach;
    }
  }
  