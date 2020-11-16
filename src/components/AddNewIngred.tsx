import React, { useContext, useState } from "react";
import history from "../history";
import { store } from "../store";
import axios from "axios";

const AddNewIngred = () => {
  const globalState = useContext(store);
  const [nameIngr, setNameIngr] = useState<string>("");
  const [nameSalad, setNameSalad] = useState<string>("");
  const [calories, setCalories] = useState<number>(0);
  const [tags, setTags] = useState<string[]>([]);
  const [oneTag, setOneTag] = useState<string>("");

  const goBack = () => {
    history.push("/");
  };
  const submitData = (e: React.FormEvent) => {
    e.preventDefault();
  };

  console.log(globalState.state.isIngredient);
  const sendData = async (e: React.FormEvent<HTMLInputElement>) => {
    await axios.post(
      `https://5faa7264b5c645001602a988.mockapi.io/${
        globalState.state.isIngredient ? "ingredient" : "salad"
      }`,
      globalState.state.isIngredient
        ? {
            name: nameIngr,
            calories: calories,
            tags: tags,
          }
        : {
            name: nameSalad,
            tags: tags,
          }
    );
  };

  const returnArrayTags = (arg: string) => {
    setTags(arg.trim().split(" "));
    return setOneTag(arg);
  };

  return (
    <div>
      {!globalState.state.list && goBack()}
      <button onClick={() => goBack()}>back</button>
      <br />
      <br />
      <form action="" onSubmit={(event) => submitData(event)}>
        <input
          type="text"
          placeholder="Enter the name of Salad"
          value={nameSalad}
          onChange={(e) => setNameSalad(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter the name of Ingredient"
          // required
          value={nameIngr}
          onChange={(e) => setNameIngr(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter the number of calories"
          // required
          value={calories ? calories : ""}
          onChange={(e) => setCalories(parseInt(e.target.value))}
        />
        <br />
        <input
          type="text"
          placeholder="Enter tags, (optional)"
          value={oneTag}
          onChange={(e) => returnArrayTags(e.target.value)}
        />
        <p>
          ***make space between every tag name, if tag name has two words conect
          them with '-'
        </p>
        <br />
        <input type="submit" value="Submit" onClick={(e) => sendData(e)} />
      </form>
    </div>
  );
};

export default AddNewIngred;
