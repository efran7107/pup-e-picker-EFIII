// you can use `ReactNode` to add a type to the children prop
import { Component } from "react";
import { Link } from "react-router-dom";
import { TSection } from "../types";

export class ClassSection extends Component<TSection> {
  render() {
    const { tab, handleTab, favDogsLen, unFavDogsLen } = this.props;
    return (
      <section id="main-section">
        <div className="container-header">
          <div className="container-label">Dogs: </div>

          <Link to={"/functional"} className="btn">
            Change to Functional
          </Link>

          <div className="selectors">
            {/* This should display the favorited count */}
            <div
              className={`selector ${fav === true ? `active` : null}`}
              onClick={() => {
                fav === true ? handleFav(undefined) : handleFav(true);
              }}
            >
              favorited ( {favDogs.length} )
            </div>

            {/* This should display the unfavorited count */}
            <div
              className={`selector ${fav === false ? `active` : null}`}
              onClick={() => {
                fav === false ? handleFav(undefined) : handleFav(false);
              }}
            >
              unfavorited ( {unFavDogs.length} )
            </div>
            <div
              className={`selector ${fav === null ? `active` : null}`}
              onClick={() => {
                fav === null ? handleFav(undefined) : handleFav(null);
              }}
            >
              create dog
            </div>
          </div>
        </div>
        <div className="content-container">{this.props.children}</div>
      </section>
    );
  }
}
