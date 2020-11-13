import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { store } from "../store";

interface Ingredient {
  id: string;
  name: string;
  image: string;
  calories: Number;
  tags: Array<string>;
}

interface Salad {
  id: string;
  name: string;
  tags: [];
  ingredients: [];
}

const NavbAr = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [salads, setSalads] = useState<Salad[]>([]);
  const [showIngredient, setShowIngredient] = useState(true);
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const showSalads = () => {
    setShowIngredient(true);
    dispatch({
      type: "SEND_LIST_INGREDIENT",
      showIngredient: true,
    });
  };

  const showIngredients = () => {
    setShowIngredient(false);
    dispatch({
      type: "SEND_LIST_INGREDIENT",
      showIngredient: false,
    });
  };

  return (
    <div>
      <h1>Navbar</h1>
      <button className="button-container" onClick={() => showSalads()}>
        Ingredients
      </button>
      <button className="button-container" onClick={() => showIngredients()}>
        Salads
      </button>
    </div>
  );
};

export default NavbAr;
