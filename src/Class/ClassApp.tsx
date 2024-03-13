import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ClassDogs } from "./ClassDogs";
import { ClassCreateDogForm } from "./ClassCreateDogForm";
import { Dog } from "../types";
import toast from "react-hot-toast";
import { Requests } from "../api";

type State = {
  allDogs: Dog[];
  fav: boolean | undefined | null;
  loading: boolean;
};

export class ClassApp extends Component {
  state: State = {
    allDogs: [],
    fav: undefined,
    loading: false,
  };

  setDogs = (): void => {
    Requests.getAllDogs().then((dogs) => {
      this.setState({ allDogs: dogs });
    });
  };

  handleDogs = (dogs: Promise<Response>) => {
    this.setState({ loading: true });
    dogs.then(this.setDogs).finally(() => {
      this.setState({ loading: false });
    });
  };

  componentDidMount(): void {
    this.setDogs();
  }

  render() {
    const { fav, allDogs, loading } = this.state;

    return (
      <div className="App" style={{ backgroundColor: "goldenrod" }}>
        <header>
          <h1>pup-e-picker (Class Version)</h1>
        </header>
        <ClassSection
          fav={fav}
          handleFav={(fav) => this.setState({ fav: fav })}
          dogSort={[isFavorite(allDogs, true), isFavorite(allDogs, false)]}
        >
          <ClassDogs
            allDogs={returnFav(fav, allDogs)}
            loading={loading}
            handleDogs={(dogs) => {
              this.handleDogs(dogs);
            }}
            deleteDog={(dog) => {
              this.setState({ loading: true });
              dog
                .then(this.setDogs)
                .then(() => {
                  toast.success("Dog Created");
                })
                .finally(() => {
                  this.setState({ loading: false });
                });
            }}
          />
          <ClassCreateDogForm
            loading={loading}
            handleNewDog={(dogs) => {
              this.setState({ loading: true });
              dogs
                .then(this.setDogs)
                .then(() => toast.success("Dog Created"))
                .finally(() => this.setState({ loading: false }));
              this.setState({ fav: undefined });
            }}
          />
        </ClassSection>
      </div>
    );
  }
}
