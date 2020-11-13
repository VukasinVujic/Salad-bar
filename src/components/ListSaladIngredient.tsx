import React, { useState, useContext } from "react";
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

// let newArray: number[] = [];

const ListSaladIngredient = () => {
  const [clicked, setClicked] = useState<number[]>([]);
  const globalState = useContext(store);
  const { dispatch } = globalState;

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
