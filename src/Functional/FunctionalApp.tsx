import { useEffect, useState } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { Dog } from "../types";
import { Requests } from "../api";

export function FunctionalApp() {
  const [allDogs, setAllDogs] = useState<Dog[]>([]);

  const fetchDogs = () => {
    return Requests.getAllDogs().then((dogs) => {
      setAllDogs(dogs);
    });
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <FunctionalSection>
        <FunctionalDogs allDogs={allDogs} />
        <FunctionalCreateDogForm />
      </FunctionalSection>
    </div>
  );
}
