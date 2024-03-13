import { ReactNode } from "react";

// Add your own custom types in here
export type Dog = {
  name: string;
  image: string;
  description: string;
  isFavorite: boolean;
  id: number;
};

export type TSection = {
  children: ReactNode;
  tab: ActiveTab;
  handleTab: (fav: ActiveTab) => void;
  favDogs: Dog[];
  unFavDogs: Dog[];
};

export type ActiveTab = "favorite" | "unfavorite" | "create-dog" | "all-dogs";
