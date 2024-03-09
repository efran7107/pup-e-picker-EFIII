import { Dog } from './types';

export const isFavorite = (dogs: Dog[], fav: boolean | undefined): Dog[] => {
	return fav
		? dogs.filter((dog) => dog.isFavorite)
		: dogs.filter((dog) => !dog.isFavorite);
};

export const returnFav = (
	fav: boolean | undefined | null,
	allDogs: Dog[]
): Dog[] => {
	switch (fav) {
		case true:
			return isFavorite(allDogs, fav);
		case false:
			return isFavorite(allDogs, fav);
		case undefined:
			return allDogs;
		default:
			return [];
	}
};
