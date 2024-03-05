import { useEffect, useState } from 'react';
import { DogCard } from '../Shared/DogCard';
import { Requests } from '../api';
import { Dog } from '../types';

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = () => {
	const [allDogs, setAllDogs] = useState<Dog[]>([]);

	const getAllDogs = () => {
		return Requests.getAllDogs().then((dogs) => setAllDogs(dogs));
	};

	useEffect(() => {
		getAllDogs();
	});

	return (
		//  the "<> </>"" are called react fragments, it's like adding all the html inside
		// without adding an actual html element
		<>
			{allDogs.map((dog) => (
				<DogCard
					dog={{
						id: dog.id,
						image: dog.image,
						description: dog.description,
						isFavorite: dog.isFavorite,
						name: dog.name,
					}}
					key={dog.id}
					onTrashIconClick={() => {}}
					onHeartClick={() => {}}
					onEmptyHeartClick={() => {}}
					isLoading={false}
				/>
			))}
		</>
	);
};
