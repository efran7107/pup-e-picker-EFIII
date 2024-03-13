// you can use this type for react children if you so choose

import { Link } from "react-router-dom";
import { TSection } from "../types";

export const FunctionalSection = ({
  children,
  tab,
  handleTab,
  favDogs,
  unFavDogs,
}: TSection) => {
  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">Dogs: </div>
        <Link to={"/class"} className="btn">
          Change to Class
        </Link>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${tab === "favorite" ? `active` : null}`}
            onClick={() => {
              tab === "favorite"
                ? handleTab("all-dogs")
                : handleTab("favorite");
            }}
          >
            favorited ( {favDogs.length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${tab === "unfavorite" ? `active` : null}`}
            onClick={() => {
              tab === "unfavorite"
                ? handleTab("all-dogs")
                : handleTab("unfavorite");
            }}
          >
            unfavorited ( {unFavDogs.length} )
          </div>
          <div
            className={`selector ${tab === null ? `active` : null}`}
            onClick={() => {
              tab === "create-dog"
                ? handleTab("all-dogs")
                : handleTab("create-dog");
            }}
          >
            create dog
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
};
