import { Dog } from "./types";

export const baseUrl = "http://localhost:3000";

export const Requests = {
  // should return a promise with all dogs in the database
  getAllDogs: (): Promise<Dog[]> =>
    fetch(`${baseUrl}/dogs`).then((dogs) => dogs.json()),
  // should create a dog in the database from a partial dog object
  // and return a promise with the result
  postDog: () => {},

  // should delete a dog from the database
  deleteDog: () => {},

  updateDog: (dog: Dog) => {
    fetch(`${baseUrl}/${dog.id}`, {
      body: JSON.stringify(dog),
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    }).then((updatedDog) => updatedDog.json);
  },

  // Just a dummy function for use in the playground
  dummyFunction: () => {
    console.log("dummy stuff");
  },
};
