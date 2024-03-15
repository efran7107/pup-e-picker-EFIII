// you can use this type for react children if you so choose

import { Link } from 'react-router-dom';
import { ActiveTab } from '../types';
import { ReactNode } from 'react';

type TSection = {
	children: ReactNode;
	tab: ActiveTab;
	setTab: (tab: ActiveTab) => void;
	favDogsLen: number;
	unFavDogsLen: number;
};

export const FunctionalSection = ({
	children,
	tab,
	setTab,
	favDogsLen,
	unFavDogsLen,
}: TSection) => {
	const handleTabChange = (newTab: ActiveTab) => {
		setTab(tab === newTab ? 'all-dogs' : newTab);
	};
	return (
		<section id='main-section'>
			<div className='container-header'>
				<div className='container-label'>Dogs: </div>
				<Link
					to={'/class'}
					className='btn'>
					Change to Class
				</Link>
				<div className='selectors'>
					{/* This should display the favorited count */}
					<div
						className={`selector ${tab === 'favorite' ? `active` : null}`}
						onClick={() => {
							handleTabChange('favorite');
						}}>
						favorited ( {favDogsLen} )
					</div>

					{/* This should display the unfavorited count */}
					<div
						className={`selector ${tab === 'unfavorite' ? `active` : null}`}
						onClick={() => {
							handleTabChange('unfavorite');
						}}>
						unfavorited ( {unFavDogsLen} )
					</div>
					<div
						className={`selector ${tab === null ? `active` : null}`}
						onClick={() => {
							handleTabChange('create-dog');
						}}>
						create dog
					</div>
				</div>
			</div>
			<div className='content-container'>{children}</div>
		</section>
	);
};
