// you can use `ReactNode` to add a type to the children prop
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { TSection } from '../types';

export class ClassSection extends Component<TSection> {
	render() {
		const { fav, handleFav, dogSort } = this.props;
		const [favDogs, unFavDogs] = dogSort;
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
							onClick={() => {
								handleFav(null);
							}}>
							create dog
						</div>
					</div>
				</div>
				<div className='content-container'>{this.props.children}</div>
			</section>
		);
	}
}
