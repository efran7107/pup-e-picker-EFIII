import { DogCard } from "../Shared/DogCard";
import { Dog } from "../types";
import { Requests } from "../api";

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = ({
  allDogs,
  isLoading,
  handleDogs,
  deleteDog,
}: {
  allDogs: Dog[];
  isLoading: boolean;
  handleDogs: (dogs: Promise<Response>) => void;
  deleteDog: (dogs: Promise<Response>) => void;
}) => {
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
          key={dog.id}
          onTrashIconClick={() => {
            deleteDog(Requests.deleteDog(dog.id));
          }}
          onHeartClick={() => {
            handleDogs(Requests.updateDog(dog.id, false));
          }}
          onEmptyHeartClick={() => {
            handleDogs(Requests.updateDog(dog.id, true));
          }}
          isLoading={isLoading}
        />
      ))}
    </>
  );
};
