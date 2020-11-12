import React from "react";
// import IngredientContainer from "./components/IngredientContainer";
import Navbar from "./components/NavBar";
// import SingleIngredient from "./components/SingleIngredient";
function App() {
  return (
    <div>
      <h1>Naslov</h1>
      <Navbar />

      {/* <SingleIngredient
        id={1}
        isIngredient={true}
        onClick={() => console.log("On click")}
      /> */}
      {/* <IngredientContainer /> */}
    </div>
  );
}

export default App;
