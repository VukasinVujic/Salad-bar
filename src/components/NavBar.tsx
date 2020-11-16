import React, { useState, useContext } from "react";
import { store } from "../store";
import history from "../history";

const NavbAr = () => {
  const [showIngredient, setShowIngredient] = useState(true);
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const showSalads = () => {
    setShowIngredient(false);
    dispatch({
      type: "SEND_LIST_INGREDIENT",
      showIngredient: false,
    });
  };

  const showIngredients = () => {
    setShowIngredient(true);
    dispatch({
      type: "SEND_LIST_INGREDIENT",
      showIngredient: true,
    });
  };
  const addSaldOrIngredient = () => {
    // dispatch({
    //   type:
    // })
    history.push("/add");
  };

  return (
    <div>
      <div className="btn-toolbar">
        <div className="left-btn">
          <button
            className="button-container"
            onClick={() => showIngredients()}
          >
            Ingredients
          </button>
          <button className="button-container" onClick={() => showSalads()}>
            Salads
          </button>

          <div className="right-btn">
            <div className="plus-button-container">
              <button
                onClick={() => addSaldOrIngredient()}
                className="button-container plus-button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbAr;
