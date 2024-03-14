import { DogCard } from '../Shared/DogCard';
import { Component } from 'react';
import { Dog } from '../types';
import { Requests } from '../api';

// Right now these dogs are constant, but in reality we should be getting these from our server

export class ClassDogs extends Component<{
	allDogs: Dog[];
	isLoading: boolean;
	handleDogs: (dogs: Promise<Response>) => void;
}> {
	render() {
		const { allDogs, isLoading, handleDogs } = this.props;

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
							handleDogs(Requests.deleteDog(dog.id));
						}}
						onHeartClick={() => {
							handleDogs(Requests.updateDog(dog.id, false));
						}}
						onEmptyHeartClick={() => {
							handleDogs(Requests.updateDog(dog.id, true));
						}}
						isLoading={isLoading}
					/>
				))}
			</>
		);
	}
}
