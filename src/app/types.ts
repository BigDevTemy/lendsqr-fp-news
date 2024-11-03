export interface UserData {
    id: string;
    name: string;
    email: string;
    // Add other properties as needed
  }

  export interface ReadMore {
    title?:string
  }
 

  export interface NewsDataData {
    title?: string;
    description: string;
    content: string;
    urlToImage:string;
    publishedAt:string;
    // Add other properties as needed
  }
  
  export interface RootState {
    userdata: UserDataState; 
    news:NewsDataState;
    readmore:ReadMore
    // Type of your userdata state
    // Add other state slices if needed
  }


  
  export interface UserDataState {
    userdata: UserData | null; // This represents the userdata field in your slice
  }

  export interface NewsDataState {
    news: NewsDataData[]; // This represents the userdata field in your slice
  }