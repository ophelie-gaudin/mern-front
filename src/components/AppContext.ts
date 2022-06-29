import { createContext } from "react";

interface User {
  _id: string;
  pseudo: string;
  email: string;
  picture: string;
  followers: [string];
  following: [string];
  likes: [string];
  updatedAt: string;
  createdAt: string;
}

export const UserContext = createContext<User | null>(null);
