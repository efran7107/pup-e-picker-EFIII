// you can use this type for react children if you so choose
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Dog } from '../types';

export const FunctionalSection = ({
	children,
	fav,
	handleFav,
	dogSort,
}: {
	children: ReactNode;
	fav: boolean | undefined;
	handleFav: (fav: boolean) => void;
	dogSort: [Dog[], Dog[]];
}) => {
	const [favDogs, unFavDogs] = dogSort;
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
						className={`selector ${fav === true ? `active` : null}`}
						onClick={() => {
							handleFav(true);
						}}>
						favorited ( {favDogs.length} )
					</div>

					{/* This should display the unfavorited count */}
					<div
						className={`selector ${fav === false ? `active` : null}`}
						onClick={() => {
							handleFav(false);
						}}>
						unfavorited ( {unFavDogs.length} )
					</div>
					<div
						className={`selector`}
						onClick={() => {}}>
						create dog
					</div>
				</div>
			</div>
			<div className='content-container'>{children}</div>
		</section>
	);
};
