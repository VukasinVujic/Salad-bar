import React from "react";
import history from "../history";

const AddNewIngred = () => {
  const goBack = () => {
    history.push("/");
  };
  // ChangeEvent<HTMLInputElement>
  const submitData = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <button onClick={() => goBack()}>back</button>
      <form action="" onSubmit={(event) => submitData(event)}>
        <input type="text" placeholder="Enter the ingredient" required />
        <input
          type="number"
          placeholder="Enter the number of calories"
          required
        />
        <input type="text" placeholder="Enter tags (optional)" />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default AddNewIngred;
