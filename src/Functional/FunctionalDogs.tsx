import { DogCard } from '../Shared/DogCard';
import { Dog } from '../types';
import { deleteDogs, updateDogs } from '../functions';

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = ({
	allDogs,
	loading,
	handleDogs,
	deleteDog,
}: {
	allDogs: Dog[];
	loading: boolean;
	handleDogs: (dogs: Promise<Response>) => void;
	deleteDog: (dogs: Promise<Response>) => void;
}) => {
	return (
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
					onTrashIconClick={() => {
						deleteDog(deleteDogs(dog.id));
					}}
					onHeartClick={() => {
						handleDogs(updateDogs(dog.id, false));
					}}
					onEmptyHeartClick={() => {
						handleDogs(updateDogs(dog.id, true));
					}}
					isLoading={loading}
				/>
			))}
		</>
	);
};
