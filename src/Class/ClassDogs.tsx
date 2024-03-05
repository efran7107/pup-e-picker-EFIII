import { DogCard } from "../Shared/DogCard";
import { Component } from "react";
import { Dog } from "../types";
import { Requests } from "../api";

// Right now these dogs are constant, but in reality we should be getting these from our server
type State = {
  allDogs: Dog[];
};
export class ClassDogs extends Component<Record<string, never>, State> {
  state: State = {
    allDogs: [],
  };

  componentDidMount(): void {
    Requests.getAllDogs().then((dogs) => {
      this.setState({ allDogs: dogs });
    });
  }

  render() {
    const { allDogs } = this.state;

    return (
      <>
        {allDogs.map((dog) => (
          <DogCard
            dog={{
              id: dog.id,
              image: dog.image,
              description: dog.description,
              isFavorite: dog.isFavorite,
              name: dog.name,
            }}
            key={dog.id + 1}
            onTrashIconClick={() => {}}
            onHeartClick={() => {}}
            onEmptyHeartClick={() => {}}
            isLoading={false}
          />
        ))}
      </>
    );
  }
}
