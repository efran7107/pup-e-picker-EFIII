import { useEffect, useState } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { Dog } from "../types";
import { fetchDogs, isFavorite, returnFav } from "../functions";

export function FunctionalApp() {
  const [allDogs, setAllDogs] = useState<Dog[]>([]);
  const [fav, setFav] = useState<boolean | undefined | null>();

  const setDogs = () => {
    fetchDogs().then(setAllDogs);
  };

  useEffect(() => {
    setDogs();
  });

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <FunctionalSection
        fav={fav}
        handleFav={setFav}
        dogSort={[isFavorite(allDogs, true), isFavorite(allDogs, false)]}
      >
        <FunctionalDogs
          allDogs={returnFav(fav, allDogs)}
          handleDogs={(dogs) => dogs.then(() => setDogs())}
          deleteDog={(dogs) => dogs.then(() => setDogs())}
        />
        <FunctionalCreateDogForm
          handleNewDog={(dog) => {
            dog.then(setDogs);
          }}
        />
      </FunctionalSection>
    </div>
  );
}
