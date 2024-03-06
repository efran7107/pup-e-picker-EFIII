import { DogCard } from '../Shared/DogCard';
import { Component } from 'react';
import { Dog } from '../types';

// Right now these dogs are constant, but in reality we should be getting these from our server

export class ClassDogs extends Component<{ allDogs: Dog[] }> {
	render() {
		const { allDogs } = this.props;

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
						onTrashIconClick={() => {}}
						onHeartClick={() => {}}
						onEmptyHeartClick={() => {}}
						isLoading={false}
					/>
				))}
			</>
		);
	}
}
