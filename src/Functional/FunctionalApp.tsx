import { useEffect, useState } from 'react';
import { FunctionalCreateDogForm } from './FunctionalCreateDogForm';
import { FunctionalDogs } from './FunctionalDogs';
import { FunctionalSection } from './FunctionalSection';
import { Dog } from '../types';
import { Requests } from '../api';
import { isFavorite, returnFav } from '../functions';

export function FunctionalApp() {
	const [allDogs, setAllDogs] = useState<Dog[]>([]);
	const [fav, setFav] = useState<boolean | undefined | null>();

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
				dogSort={[isFavorite(allDogs, true), isFavorite(allDogs, false)]}>
				<FunctionalDogs allDogs={returnFav(fav, allDogs)} />
				<FunctionalCreateDogForm />
			</FunctionalSection>
		</div>
	);
}
