// you can use `ReactNode` to add a type to the children prop
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { TSection } from '../types';

export class ClassSection extends Component<TSection> {
	render() {
		const { tab, handleTab, favDogsLen, unFavDogsLen, children } = this.props;
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
								tab === 'favorite' ? handleTab('all-dogs') : handleTab('favorite');
							}}>
							favorited ( {favDogsLen} )
						</div>

						{/* This should display the unfavorited count */}
						<div
							className={`selector ${tab === 'unfavorite' ? `active` : null}`}
							onClick={() => {
								tab === 'unfavorite' ? handleTab('all-dogs') : handleTab('unfavorite');
							}}>
							unfavorited ( {unFavDogsLen} )
						</div>
						<div
							className={`selector ${tab === 'create-dog' ? `active` : null}`}
							onClick={() => {
								tab === 'create-dog' ? handleTab('all-dogs') : handleTab('create-dog');
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
