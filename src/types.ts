import { ReactNode } from 'react';

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
	fav: boolean | undefined;
	handleFav: (fav: boolean) => void;
	dogSort: [Dog[], Dog[]];
};
