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
    return ingredient.tags.map((value) => {
      console.log(ingredient.tags);
      return <li>{value}</li>;
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
      console.log(responseData);
      setIngredient(responseData);
    })();
  }, [props.id]);

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
