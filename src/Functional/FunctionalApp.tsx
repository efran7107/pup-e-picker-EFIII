import { useEffect, useState } from 'react';
import { FunctionalCreateDogForm } from './FunctionalCreateDogForm';
import { FunctionalDogs } from './FunctionalDogs';
import { FunctionalSection } from './FunctionalSection';
import { Dog } from '../types';
import { fetchDogs, isFavorite, returnFav } from '../functions';
import toast from 'react-hot-toast';

export function FunctionalApp() {
	const [allDogs, setAllDogs] = useState<Dog[]>([]);
	const [fav, setFav] = useState<boolean | undefined | null>();
	const [loading, isLoading] = useState(false);

	const setDogs = () => {
		fetchDogs().then(setAllDogs);
	};

	const handleChangeDogs = (dogs: Promise<Response>) => {
		isLoading(true);
		dogs.then(setDogs).finally(() => isLoading(false));
	};

	useEffect(() => {
		setDogs();
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
				handleFav={setFav}
				dogSort={[isFavorite(allDogs, true), isFavorite(allDogs, false)]}>
				<FunctionalDogs
					loading={loading}
					allDogs={returnFav(fav, allDogs)}
					handleDogs={handleChangeDogs}
					deleteDog={handleChangeDogs}
				/>
				<FunctionalCreateDogForm
					loading={loading}
					handleNewDog={(dogs) => {
						isLoading(true);
						dogs
							.then(setDogs)
							.then(() => toast.success('Dog Created'))
							.finally(() => isLoading(false));
						setFav(undefined);
					}}
				/>
			</FunctionalSection>
		</div>
	);
}
