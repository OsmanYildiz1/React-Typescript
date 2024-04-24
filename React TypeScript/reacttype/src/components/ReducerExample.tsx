import React from "react";
import { useReducer } from "react";

type CounterType = {
  count: number;
};

type ActionType = {
  type: string;
  payload: number;
};

type ResetType = {
  type: "reset"; // sadece type reset olduğunda çalışacak
};

type CounterAction = ActionType | ResetType;

const initialState = { count: 0 };

function reducer(state: CounterType, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Sayı: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 15 })}>
        {" "}
        15 arttır
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 15 })}>
        {" "}
        15 azalt
      </button>
      <button onClick={() => dispatch({ type: "reset" })}> Sıfırla</button>
    </>
  );
}

export default ReducerExample;
