export interface User {
  causes: string[];
  donuts: number;
  donuts_earned: number;
  donut_given: number;
  name: string;
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

export interface Challenge {
  description: string;
  donut: number;
  icon: string;
  isCompleted: boolean;
  title: string;
  isClaimed: boolean;
}
