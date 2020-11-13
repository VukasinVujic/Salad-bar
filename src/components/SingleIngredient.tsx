import React, { useContext } from "react";
import { store } from "../store";

interface Props {
  index: number;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

interface Ingredient {
  name: string;
  image: string;
  calories: Number;
  tags: Array<string>;
}

const SingleIngredient = (props: Props) => {
  const globalState = useContext(store);
  const ingredient = globalState.state.list[props.index] as Ingredient;

  const getTags = () => {
    return ingredient.tags.map((value, index) => {
      console.log(ingredient.tags);
      return <li key={index}>{value}</li>;
    });
  };

  return (
    <div className="cardView" onClick={props.onClick}>
      <p className="title">{ingredient.name}</p>
      {/*<img alt="" src={ingredient.image}></img>*/}
      <img
        alt=""
        src="https://lepaisrecna.rs/Picture/63259/jpeg/jagode_ili_jabuke_otriveno_koje_voce_ima_vise_otrova_u_sebi_evo_koje_voce_se_najvise_prska_opasnim_hemikalijama_629426525"
      ></img>
      <p>{ingredient.calories} calories</p>
      <p> Tags: </p>
      <ul>{getTags()}</ul>
    </div>
  );
};

export default SingleIngredient;
