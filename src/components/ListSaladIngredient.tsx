import React, { useState, useContext, useEffect } from "react";
import { store } from "../store";
import SingleIngredient from "./SingleIngredient";
import SingleSalad from "./SingleSalad";
import NavBar from "./NavBar";
import axios from "axios";

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
  tags: Array<string>;
  ingredients: Array<Ingredient>;
}

// let newArray: number[] = [];
let counter = 0;
const ListSaladIngredient = () => {
  const [clicked, setClicked] = useState<number[]>([]);
  const [tagTextFilter, setTagTextFilter] = useState<string>("");
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const showSingleItem = (arg: string) => {};

  const [nameSearch, setNameSearch] = useState<string>("");
  console.log(globalState);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://5faa7264b5c645001602a988.mockapi.io/${
          globalState.state.isIngredient ? "ingredient" : "salad"
        }?name=${nameSearch}&orderBy=${orderBy}&order=${order}`
      );
      dispatch({
        type: "SEND_LIST",
        payload: response.data,
      });
    })();
  }, [dispatch, nameSearch, order, orderBy, globalState.state.isIngredient]);

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
    return globalState.state.list
      .filter((element: Ingredient | Salad) => {
        if (tagTextFilter === "") return true;
        return element.tags.includes(tagTextFilter);
      })
      .map((value: Ingredient | Salad) => {
        var index = globalState.state.list.indexOf(value);
        console.log(globalState.state);
        if (globalState.state.isIngredient) {
          return (
            <SingleIngredient
              index={index}
              key={value.id}
              onClick={() => {
                showSingleItem(globalState.state.list[index].id);
                toggle(index);
              }}
              onTagClick={(tagText) => setTagTextFilter(tagText)}
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
      });
  };

  const tagFilterShow = () => {
    if (tagTextFilter)
      return (
        <div>
          <p> Filtering by tag "{tagTextFilter}"</p>
          <button onClick={() => setTagTextFilter("")}>
            {" "}
            Remove tag filter{" "}
          </button>
        </div>
      );
  };

  return (
    <div>
      <NavBar />
      <div className="center">
        <div className="search-container">
          <div>
            <input
              placeholder="Search by name"
              className="search-input"
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Sort by:</label>
            <select
              name="ordersBy"
              id="orderBy"
              onChange={(e) => setOrderBy(e.target.value)}
            >
              {" "}
              <option value="name">Name</option>
              <option value="calories">Number of calories</option>
            </select>
            <select
              name="orders"
              id="order"
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="asc">Asceding</option>
              <option value="desc">Desceding</option>
            </select>
          </div>
          {tagFilterShow()}
        </div>
        <ul>{globalState.state.list && showList()}</ul>
      </div>
    </div>
  );
};

export default ListSaladIngredient;
