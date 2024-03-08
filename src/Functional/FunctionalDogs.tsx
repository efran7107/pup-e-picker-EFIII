import { useState } from "react";
import { DogCard } from "../Shared/DogCard";
import { Dog } from "../types";

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = ({ allDogs }: { allDogs: Dog[] }) => {
  const [dogs, setDogs] = useState<Dog[]>(allDogs);

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
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
          onTrashIconClick={() => {}}
          onHeartClick={() => {}}
          onEmptyHeartClick={() => {}}
          isLoading={false}
        />
      ))}
    </>
  );
};
