// you can use `ReactNode` to add a type to the children prop
import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ActiveTab } from '../types';

type TSection = {
	children: ReactNode;
	tab: ActiveTab;
	setTab: (fav: ActiveTab) => void;
	favDogsLen: number;
	unFavDogsLen: number;
};

export class ClassSection extends Component<TSection> {
	handleTabChange = (newTab: ActiveTab) => {
		this.props.setTab(this.props.tab === newTab ? 'all-dogs' : newTab);
	};

	render() {
		const { tab, favDogsLen, unFavDogsLen, children } = this.props;
		return (
			<section id='main-section'>
				<div className='container-header'>
					<div className='container-label'>Dogs: </div>

					<Link
						to={'/functional'}
						className='btn'>
						Change to Functional
					</Link>

					<div className='selectors'>
						{/* This should display the favorited count */}
						<div
							className={`selector ${tab === 'favorite' ? `active` : null}`}
							onClick={() => {
								this.handleTabChange('favorite');
							}}>
							favorited ( {favDogsLen} )
						</div>

						{/* This should display the unfavorited count */}
						<div
							className={`selector ${tab === 'unfavorite' ? `active` : null}`}
							onClick={() => {
								this.handleTabChange('unfavorite');
							}}>
							unfavorited ( {unFavDogsLen} )
						</div>
						<div
							className={`selector ${tab === 'create-dog' ? `active` : null}`}
							onClick={() => {
								this.handleTabChange('create-dog');
							}}>
							create dog
						</div>
					</div>
				</div>
				<div className='content-container'>{children}</div>
			</section>
		);
	}
}
