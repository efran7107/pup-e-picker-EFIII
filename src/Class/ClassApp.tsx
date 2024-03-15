import { Component } from 'react';
import { ClassSection } from './ClassSection';
import { ClassDogs } from './ClassDogs';
import { ClassCreateDogForm } from './ClassCreateDogForm';
import { ActiveTab, Dog } from '../types';
import toast from 'react-hot-toast';
import { Requests } from '../api';
import { getTabDogs } from '../functions';

type State = {
	allDogs: Dog[];
	tab: ActiveTab;
	isLoading: boolean;
};

export class ClassApp extends Component<Record<string, never>, State> {
	state: State = {
		allDogs: [],
		tab: 'all-dogs',
		isLoading: false,
	};

	setDogs = (): void => {
		Requests.getAllDogs().then((dogs) => {
			this.setState({ allDogs: dogs });
		});
	};

	handleDogs = (dogs: Promise<Response>) => {
		this.setState({ isLoading: true });
		dogs.then(this.setDogs).finally(() => {
			this.setState({ isLoading: false });
		});
	};

	componentDidMount(): void {
		this.setDogs();
	}

	render() {
		const { tab, allDogs, isLoading } = this.state;

		return (
			<div
				className='App'
				style={{ backgroundColor: 'goldenrod' }}>
				<header>
					<h1>pup-e-picker (Class Version)</h1>
				</header>
				<ClassSection
					tab={tab}
					setTab={(tab) => this.setState({ tab: tab })}
					favDogsLen={getTabDogs(allDogs, 'favorite').length}
					unFavDogsLen={getTabDogs(allDogs, 'unfavorite').length}>
					<ClassDogs
						allDogs={getTabDogs(allDogs, tab)}
						isLoading={isLoading}
						handleDogs={(dogs) => {
							this.handleDogs(dogs);
						}}
					/>
					{tab === 'create-dog' && (
						<ClassCreateDogForm
							isLoading={isLoading}
							handleNewDog={(dogs) => {
								this.setState({ isLoading: true });
								dogs
									.then(this.setDogs)
									.then(() => toast.success('Dog Created'))
									.finally(() => this.setState({ isLoading: false }));
								this.setState({ tab: 'all-dogs' });
							}}
						/>
					)}
				</ClassSection>
			</div>
		);
	}
}
