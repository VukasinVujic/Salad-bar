import React, { useEffect, useState } from "react";
import axios from "axios";

const NavbAr = () => {
  const [ingredients, setIngredients] = useState([]);
  const [salds, setSalds] = useState([]);
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
      setSalds(response.data);
    })();
  }, []);

  const showSalads = () => {
    setShowIngredient(false);
  };

  const showIngredients = () => {
    setShowIngredient(true);
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
      {}
    </div>
  );
};

export default NavbAr;
