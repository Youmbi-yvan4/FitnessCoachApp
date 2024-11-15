export class Coach {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string;
    sportType: string;
    description: string;
    pricePerSession: number;
  
    constructor(
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      profilePicture: string,
      sportType: string,
      description: string,
      pricePerSession: number
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.profilePicture = profilePicture;
      this.sportType = sportType;
      this.description = description;
      this.pricePerSession = pricePerSession;
    }
  }
  