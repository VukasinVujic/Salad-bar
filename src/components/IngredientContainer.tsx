import React from "react";

const IngredientContainer = () => {
  function importAll(r: any) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("./images", false, /\.png$/));

  console.log(images);
  return (
    <div>
      {images.map((picture: any, index: number) => {
        return (
          <img
            src={picture.default}
            alt=""
            key={index}
            className="ingredient-picture"
          />
        );
      })}
    </div>
  );
};

export default IngredientContainer;
