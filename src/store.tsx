import React, { createContext, useReducer } from "react";

const initialState: any = {};
const store = createContext(initialState);
const { Provider } = store;

type Children = {
  children: React.ReactNode;
};

const StateProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(
    (
      state: any,
      action: { type: string; payload: []; showIngredient: boolean }
    ) => {
      switch (action.type) {
        case "SEND_LIST_INGREDIENT":
          return {
            ...state,
            list: action.payload,
            isIngredient: action.showIngredient,
          };
        case "SEND_LIST_SALADS":
          return {
            ...state,
            list: action.payload,
            isIngredient: action.showIngredient,
          };
        default:
          throw new Error();
      }
    },
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
