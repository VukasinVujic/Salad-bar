import React, { useState, useContext } from "react";
import { store } from "../store";
import SingleIngredient from "./SingleIngredient";
import SingleSalad from "./SingleSalad";

interface Ingredient {
  id: number;
  name: string;
  image: string;
  calories: Number;
  tags: Array<string>;
}

interface Salad {
  id: number;
  name: string;
  tags: [];
  ingredients: [];
}

// let newArray: number[] = [];

const ListSaladIngredient = () => {
  const [clicked, setClicked] = useState<number[]>([]);
  const globalState = useContext(store);
  const showSingleItem = (arg: string) => {
    // console.log(arg);
  };

  const toggle = (value: number) => {
    let newArray = [...clicked];
    let index = newArray.indexOf(value);
    if (index > -1) {
      newArray.splice(index, 1);
      setClicked(newArray);
    } else {
      newArray.push(value);
      setClicked(newArray);
    }
  };
  const showList = () => {
    return globalState.state.list.map(
      (value: Ingredient | Salad, index: number) => {
        if (globalState.state.isIngredient) {
          return (
            <SingleIngredient
              index={index}
              key={value.id}
              onClick={() => {
                showSingleItem(globalState.state.list[index].id);
                toggle(index);
              }}
            />
          );
        } else {
          return (
            <SingleSalad
              //   style={{ background: giveColor(index) }}
              index={index}
              key={value.id}
              onClick={() => {
                showSingleItem(globalState.state.list[index].id);
                toggle(index);
              }}
            />
          );
        }
      }
    );
  };

  return (
    <div>
      <ul>{globalState.state.list && showList()}</ul>
    </div>
  );
};

export default ListSaladIngredient;
