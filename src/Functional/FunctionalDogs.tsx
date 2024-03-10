import { useEffect, useState } from "react";
import { DogCard } from "../Shared/DogCard";
import { Dog } from "../types";
import { deleteDogs, fetchDogs, returnFav, updateDogs } from "../functions";
import { Requests } from "../api";

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = ({
  allDogs,
  fav,
  handleDogs,
  deleteDog,
}: {
  allDogs: Dog[];
  fav: boolean | undefined | null;
  handleDogs: (dogs: Promise<void>) => void;
  deleteDog: (dogs: Promise<void>) => void;
}) => {
  const [dogs, setDogs] = useState<Dog[]>(allDogs);

  const setAllDogs = (allDogs: Dog[]) => {
    setDogs(allDogs);
    // handleDogs(allDogs);
  };

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
          onTrashIconClick={() => {
            deleteDog(deleteDogs(dog.id));
            // Requests.deleteDog(dog.id).then(() => {
            //   fetchDogs().then(setAllDogs);
            // });
          }}
          onHeartClick={() => {
            handleDogs(updateDogs(dog.id, false));
          }}
          onEmptyHeartClick={() => {
            handleDogs(updateDogs(dog.id, true));
            // updateDogs(dog.id, true).then(() => {
            //   fetchDogs().then(handleDogs);
            // });
          }}
          isLoading={false}
        />
      ))}
    </>
  );
};
