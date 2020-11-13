import React from "react";
// import IngredientContainer from "./components/IngredientContainer";
import Navbar from "./components/NavBar";
// import SingleIngredient from "./components/SingleIngredient";
import ListSaladIngredient from "./components/ListSaladIngredient";
import AddNewIngred from "./components/AddNewIngred";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <div>
      <Router history={history}>
        <h1>Naslov</h1>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ListSaladIngredient} />
          <Route path="/add" exact component={AddNewIngred} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
