export interface User {
  causes: string[];
  donut_balance: number;
  donut_earned: number;
  donut_given: number;
}

export interface Post {
  causes: string;
  description: string;
  image: string;
  likes: number;
  reposts: number;
  time: string;
  user_image: string;
  username: string;
}
