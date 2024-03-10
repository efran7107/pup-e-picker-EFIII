import { useState } from "react";
import { dogPictures } from "../dog-pictures";
import { createDog } from "../functions";

// use this as your default selected image
const defaultSelectedImage = dogPictures.BlueHeeler;

export const FunctionalCreateDogForm = ({
  handleNewDog,
}: {
  handleNewDog: (dogs: Promise<Response>) => void;
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
        handleNewDog(
          createDog({
            name: name,
            image: image,
            description: description,
            isFavorite: false,
          })
        );
        setName("");
        setDescription("");
        setImage(defaultSelectedImage);
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
        value={image}
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
