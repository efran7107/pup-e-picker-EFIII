import { useState } from "react";
import { dogPictures } from "../dog-pictures";
import { Dog } from "../types";

// use this as your default selected image
const defaultSelectedImage = dogPictures.BlueHeeler;

export const FunctionalCreateDogForm = ({
  handleNewDog,
}: {
  handleNewDog: (dog: Omit<Dog, "id">) => void;
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(defaultSelectedImage);

  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleNewDog({
          name: name,
          image: image,
          description: description,
          isFavorite: false,
        });
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        disabled={false}
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name=""
        id=""
        cols={80}
        rows={10}
        disabled={false}
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        defaultValue={image}
        onChange={(e) => setImage(e.currentTarget.value)}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return (
            <option value={pictureValue} key={pictureValue}>
              {label}
            </option>
          );
        })}
      </select>
      <input type="submit" />
    </form>
  );
};
