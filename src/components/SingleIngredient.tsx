import React from "react";

interface Props {
  route: string;
  index: number;
}

const SingleIngredient = (props: Props) => {
  const giveName = () => {
    const startIndex = props.route.indexOf("a/") + 2;
    const endIndex = props.route.indexOf(".");
    const nameOfPict = props.route.slice(startIndex, endIndex);
    return nameOfPict;
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <div>
      <img
        src={props.route}
        alt=""
        key={props.index}
        className="ingredient-picture"
      />
      <p>{giveName()}</p>
      <form action="">
        <input
          type="text"
          placeholder="Add tag"
          onKeyPress={(e) => addTag(e)}
        />
      </form>
    </div>
  );
};

export default SingleIngredient;
