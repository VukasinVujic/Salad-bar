import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { store } from "../store";
import history from "../history";

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

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://5faa7264b5c645001602a988.mockapi.io/ingredient"
      );
      setIngredients(response.data);
      dispatch({
        type: "SEND_LIST_INGREDIENT",
        payload: response.data,
        showIngredient: true,
      });
    })();
    (async () => {
      const response = await axios.get(
        "https://5faa7264b5c645001602a988.mockapi.io/salad"
      );
      setSalads(response.data);
    })();
  }, [dispatch]);

  const showSalads = () => {
    setShowIngredient(true);
    dispatch({
      type: "SEND_LIST_INGREDIENT",
      payload: ingredients,
      showIngredient: true,
    });
  };

  const showIngredients = () => {
    setShowIngredient(false);
    dispatch({
      type: "SEND_LIST_INGREDIENT",
      payload: salads,
      showIngredient: false,
    });
  };

  const addIngredient = () => {
    history.push("/add");
  };

  return (
    <div>
      <div className="btn-toolbar">
        <div className="left-btn">
          <button className="button-container" onClick={() => showSalads()}>
            Ingredients
          </button>
          <button
            className="button-container"
            onClick={() => showIngredients()}
          >
            Salads
          </button>
        </div>
        <div className="right-btn">
          <div className="plus-button-container">
            <button
              onClick={() => addIngredient()}
              className="button-container plus-button"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbAr;
