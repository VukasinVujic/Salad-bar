import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  id: Number;
  isIngredient: Boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

interface Ingredient {
  name: string;
  image: string;
  calories: Number;
  tags: Array<string>;
}

const SingleIngredient = (props: Props) => {
  const [ingredient, setIngredient] = useState<Ingredient>({
    name: "Loading...",
    image: "",
    calories: 0,
    tags: [],
  });

  const getTags = () => {
    return ingredient.tags.map((index, value) => {
      console.log(ingredient.tags);
      return <li key={index}>{value}</li>;
    });
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://5faa7264b5c645001602a988.mockapi.io/${
          props.isIngredient ? "ingredient" : "salad"
        }/${props.id}`
      );
      const responseData = response.data;
      // setIngredient(responseData);
    })();
  }, [props.id, props.isIngredient]);

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
