import { Dog } from "./types";

export const baseUrl = "http://localhost:3000";

export const Requests = {
  // should return a promise with all dogs in the database
  getAllDogs: (): Promise<Dog[]> =>
    fetch(`${baseUrl}/dogs`).then((dogs) => dogs.json()),
  // should create a dog in the database from a partial dog object
  // and return a promise with the result
  postDog: (dog: Omit<Dog, "id">) =>
    fetch(`${baseUrl}/dogs`, {
      body: JSON.stringify(dog),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }),

  // should delete a dog from the database
  deleteDog: (id: number) =>
    fetch(`${baseUrl}/dogs/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((updatedDogs) => updatedDogs.json()),

  updateDog: (id: number, fav: boolean) =>
    fetch(`${baseUrl}/dogs/${id}`, {
      body: JSON.stringify({ isFavorite: fav }),
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    }).then((updatedDogs) => updatedDogs.json()),

  // Just a dummy function for use in the playground
  dummyFunction: () => {
    console.log("dummy stuff");
  },
};
