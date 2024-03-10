import { DogCard } from '../Shared/DogCard';
import { Component } from 'react';
import { Dog } from '../types';
import { deleteDogs, updateDogs } from '../functions';

// Right now these dogs are constant, but in reality we should be getting these from our server

export class ClassDogs extends Component<{
	allDogs: Dog[];
	loading: boolean;
	handleDogs: (dogs: Promise<Response>) => void;
	deleteDog: (dogs: Promise<Response>) => void;
}> {
	render() {
		const { allDogs, loading, handleDogs, deleteDog } = this.props;

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
						key={dog.id + 1}
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
	}
}
