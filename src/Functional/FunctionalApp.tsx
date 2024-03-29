import { useEffect, useState } from 'react';
import { FunctionalCreateDogForm } from './FunctionalCreateDogForm';
import { FunctionalDogs } from './FunctionalDogs';
import { FunctionalSection } from './FunctionalSection';
import { ActiveTab, Dog } from '../types';
import { getTabDogs } from '../functions';
import toast from 'react-hot-toast';
import { Requests } from '../api';

export function FunctionalApp() {
	const [allDogs, setAllDogs] = useState<Dog[]>([]);
	const [tab, setTab] = useState<ActiveTab>('all-dogs');
	const [isLoading, setIsLoading] = useState(false);

	const setDogs = () => {
		Requests.getAllDogs().then(setAllDogs);
	};

	const handleChangeDogs = (dogs: Promise<Response>) => {
		setIsLoading(true);
		dogs.then(setDogs).finally(() => setIsLoading(false));
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
				tab={tab}
				setTab={setTab}
				favDogsLen={getTabDogs(allDogs, 'favorite').length}
				unFavDogsLen={getTabDogs(allDogs, 'unfavorite').length}>
				<FunctionalDogs
					isLoading={isLoading}
					allDogs={getTabDogs(allDogs, tab)}
					handleDogs={handleChangeDogs}
				/>
				{tab === 'create-dog' && (
					<FunctionalCreateDogForm
						isLoading={isLoading}
						handleNewDog={(dogs) => {
							setIsLoading(true);
							dogs
								.then(setDogs)
								.then(() => toast.success('Dog Created'))
								.finally(() => setIsLoading(false));
							setTab('all-dogs');
						}}
					/>
				)}
			</FunctionalSection>
		</div>
	);
}
