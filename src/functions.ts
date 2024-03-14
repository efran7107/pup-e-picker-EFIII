import { Requests } from './api';
import { ActiveTab, Dog } from './types';

export const getTabDogs = (dogs: Dog[], tab: ActiveTab): Dog[] => {
	switch (tab) {
		case 'favorite':
			return dogs.filter((dog) => dog.isFavorite);
		case 'unfavorite':
			return dogs.filter((dog) => !dog.isFavorite);
		case 'all-dogs':
			return dogs;
		case 'create-dog':
			return [];
	}
};

export const createDog = (dog: Omit<Dog, 'id'>) => {
	return Requests.postDog(dog);
};
