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
let newArray: number[] = [];

const NavbAr = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [salads, setSalads] = useState<Salad[]>([]);
  const [showIngredient, setShowIngredient] = useState(true);
  const [clicked, setClicked] = useState<number[]>([]);
  const [selectedColor, setSelectedColor] = useState("white");
  const globalState = useContext(store);
  const { dispatch } = globalState;

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://5faa7264b5c645001602a988.mockapi.io/ingredient"
      );
      setIngredients(response.data);
      dispatch({ type: "SEND_LIST_INGREDIENT", payload: response.data });
    })();
    (async () => {
      const response = await axios.get(
        "https://5faa7264b5c645001602a988.mockapi.io/salad"
      );
      setSalads(response.data);
    })();
  }, []);

  const showSalads = () => {
    setShowIngredient(true);
    dispatch({ type: "SEND_LIST_INGREDIENT", payload: ingredients });
  };

  const showIngredients = () => {
    setShowIngredient(false);
    dispatch({ type: "SEND_LIST_INGREDIENT", payload: salads });
  };

  const showSingleItem = (arg: string) => {
    // console.log(arg);
  };

  const toggle = (value: number) => {
    if (newArray.includes(value)) {
      newArray.splice(0, 0, value);
      setClicked(newArray);
    } else {
      newArray.push(value);
      setClicked(newArray);
    }
  };

  const giveColor = (index: number) => {
    // console.log("new array" + newArray);
    // console.log("clicked " + clicked);
    if (clicked.includes(index)) {
      console.log("blue");
      return "blue";
    } else {
      console.log("whitee");
      return "white";
    }
  };

  const showList = () => {
    let saladOrIngredient: (Ingredient | Salad)[] = showIngredient
      ? ingredients
      : salads;
    return saladOrIngredient.map((value, index) => {
      return (
        <li
          className="single-item"
          style={{ background: giveColor(index) }}
          key={value.id}
          onClick={() => {
            showSingleItem(globalState.state.list[index].id);
            toggle(index);
          }}
        >
          {/* {globalState.state.list[index].id} */}
          {value.name}
        </li>
      );
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
      <ul>{showList()}</ul>
    </div>
  );
};

export default NavbAr;
