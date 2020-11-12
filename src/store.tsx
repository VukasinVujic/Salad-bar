import React, { createContext, useReducer } from "react";

const initialState: any = {};
const store = createContext(initialState);
const { Provider } = store;

type Children = {
  children: React.ReactNode;
};

const StateProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(
    (state: any, action: { type: string; payload: string }) => {
      switch (action.type) {
        case "SEND_LIST_INGREDIENT":
          return { ...state, lala: action.payload };
        case "SEND_LIST_SALADS":
          return { ...state, lala: action.payload };

        default:
          throw new Error();
      }
    },
    initialState
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
