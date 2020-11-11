import React from "react";
import SingleIngredient from "./SingleIngredient";

interface Picture {
  default: string;
  __esModule: boolean;
  // : String;
}

const IngredientContainer = () => {
  function importAll(r: any) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("./images", false, /\.png$/));

  return (
    <div>
      {images.map((picture: Picture, index: number) => {
        return <div></div>;
      })}
    </div>
  );
};

export default IngredientContainer;
