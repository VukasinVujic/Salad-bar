import React, { useContext } from "react";
import { store } from "../store";

interface Props {
  index: number;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

interface Ingredient {
  name: string;
  image: string;
  calories: number;
  tags: Array<string>;
}

interface Salad {
  name: string;
  image: string;
  ingredients: Array<Ingredient>;
  tags: Array<string>;
}

const SingleSalad = (props: Props) => {
  const globalState = useContext(store);
  const salad = globalState.state.list[props.index] as Salad;
  const getTags = () => {
    return salad.tags.map((index, value) => {
      return <li key={index}>{value}</li>;
    });
  };

  const getIngredients = () => {
    return salad.ingredients.map((value, index) => {
      return <li key={index}>{value.name}</li>;
    });
  };

  return (
    <div className="cardView" onClick={props.onClick}>
      <p className="title">{salad.name}</p>
      {/*<img alt="" src={salad.image}></img>*/}
      <img
        alt=""
        src="https://lepaisrecna.rs/Picture/63259/jpeg/jagode_ili_jabuke_otriveno_koje_voce_ima_vise_otrova_u_sebi_evo_koje_voce_se_najvise_prska_opasnim_hemikalijama_629426525"
      ></img>
      <p>
        {/* {salad.ingredients.reduce((acc, value) => acc + value.calories, 0)}{" "} */}
        calories
      </p>
      <p> Tags: </p>
      <ul>{getTags()}</ul>
      <p> Ingredients: </p>
      <ul>{getIngredients()}</ul>
    </div>
  );
};

export default SingleSalad;
