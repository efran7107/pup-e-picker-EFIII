import { Component } from 'react';
import { ClassSection } from './ClassSection';
import { ClassDogs } from './ClassDogs';
import { ClassCreateDogForm } from './ClassCreateDogForm';
import { Requests } from '../api';
import { Dog } from '../types';

type State = {
	allDogs: Dog[];
	fav: boolean | undefined;
};

export class ClassApp extends Component {
	state: State = {
		allDogs: [],
		fav: undefined,
	};

	sortDog = (fav: boolean | undefined): Dog[] => {
		switch (fav) {
			case true:
				return this.state.allDogs.filter((dog) => dog.isFavorite);
			case false:
				return this.state.allDogs.filter((dog) => !dog.isFavorite);
			default:
				return this.state.allDogs;
		}
	};

	fetchDogs = () => {
		return Requests.getAllDogs().then((dogs) => {
			this.setState({ allDogs: dogs });
		});
	};

	componentDidMount(): void {
		this.fetchDogs();
	}

	render() {
		const { fav } = this.state;
		return (
			<div
				className='App'
				style={{ backgroundColor: 'goldenrod' }}>
				<header>
					<h1>pup-e-picker (Class Version)</h1>
				</header>
				<ClassSection
					fav={fav}
					handleFav={(fav) => this.setState({ fav: fav })}
					dogSort={[this.sortDog(true), this.sortDog(false)]}>
					<ClassDogs allDogs={this.sortDog(fav)} />
					<ClassCreateDogForm />
				</ClassSection>
			</div>
		);
	}
}
