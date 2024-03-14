import { Component } from 'react';
import { dogPictures } from '../dog-pictures';
import { Dog } from '../types';
import { Requests } from '../api';

const defaultSelectedImage = dogPictures.BlueHeeler;

export class ClassCreateDogForm extends Component<{
	isLoading: boolean;
	handleNewDog: (dogs: Promise<Response>) => void;
}> {
	state: Omit<Dog, 'id'> = {
		name: '',
		description: '',
		image: defaultSelectedImage,
		isFavorite: false,
	};

	render() {
		const { isLoading, handleNewDog } = this.props;
		const { name, description, image } = this.state;
		return (
			<form
				action=''
				id='create-dog-form'
				onSubmit={(e) => {
					e.preventDefault();
					handleNewDog(Requests.postDog(this.state));
					this.setState({
						name: '',
						description: '',
						image: defaultSelectedImage,
					});
				}}>
				<h4>Create a New Dog</h4>
				<label htmlFor='name'>Dog Name</label>
				<input
					type='text'
					onChange={(e) => {
						this.setState({ name: e.currentTarget.value });
					}}
					disabled={isLoading}
					value={name}
				/>
				<label htmlFor='description'>Dog Description</label>
				<textarea
					name=''
					id=''
					cols={80}
					rows={10}
					onChange={(e) => {
						this.setState({ description: e.currentTarget.value });
					}}
					disabled={isLoading}
					value={description}
				/>
				<label htmlFor='picture'>Select an Image</label>
				<select
					onChange={(e) => {
						this.setState({ image: e.currentTarget.value });
					}}
					value={image}
					disabled={false}>
					{Object.entries(dogPictures).map(([label, pictureValue]) => {
						return (
							<option
								value={pictureValue}
								key={pictureValue}>
								{label}
							</option>
						);
					})}
				</select>
				<input
					type='submit'
					value='submit'
					disabled={isLoading}
				/>
			</form>
		);
	}
}
