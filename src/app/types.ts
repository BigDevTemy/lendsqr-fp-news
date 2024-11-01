export interface UserData {
    id: string;
    name: string;
    email: string;
    // Add other properties as needed
  }
  
  export interface RootState {
    userdata: UserDataState; // Type of your userdata state
    // Add other state slices if needed
  }


  
  export interface UserDataState {
    userdata: UserData | null; // This represents the userdata field in your slice
  }