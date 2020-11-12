import React, { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://5faa7264b5c645001602a988.mockapi.io/ingredient"
      );
      setIngredients(response.data);
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
  };

  const showIngredients = () => {
    setShowIngredient(false);
  };
  const showList = () => {
    let saladOrIngredient: (Ingredient | Salad)[] = showIngredient
      ? ingredients
      : salads;
    return saladOrIngredient.map((value) => {
      return <li key={value.id}>{value.name}</li>;
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
