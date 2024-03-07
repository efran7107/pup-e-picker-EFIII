import { useEffect, useState } from 'react';
import { FunctionalCreateDogForm } from './FunctionalCreateDogForm';
import { FunctionalDogs } from './FunctionalDogs';
import { FunctionalSection } from './FunctionalSection';
import { Dog } from '../types';
import { Requests } from '../api';

export function FunctionalApp() {
	const [allDogs, setAllDogs] = useState<Dog[]>([]);
	const [fav, setFav] = useState<boolean | undefined | null>();

	const sortDogs = (fav: boolean | undefined | null): Dog[] => {
		switch (fav) {
			case true:
				return allDogs.filter((dog) => dog.isFavorite);
			case false:
				return allDogs.filter((dog) => !dog.isFavorite);
			case undefined:
				return allDogs;
			default:
				return [];
		}
	};

	const fetchDogs = () => {
		return Requests.getAllDogs().then((dogs) => {
			setAllDogs(dogs);
		});
	};

	useEffect(() => {
		fetchDogs();
	}, []);

	return (
		<div
			className='App'
			style={{ backgroundColor: 'skyblue' }}>
			<header>
				<h1>pup-e-picker (Functional)</h1>
			</header>
			<FunctionalSection
				fav={fav}
				handleFav={(fav) => setFav(fav)}
				dogSort={[sortDogs(true), sortDogs(false)]}>
				<FunctionalDogs allDogs={sortDogs(fav)} />
				<FunctionalCreateDogForm />
			</FunctionalSection>
		</div>
	);
}
